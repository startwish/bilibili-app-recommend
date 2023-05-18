import { ModalSettings } from '$components/ModalSettings'
import { IconPark } from '$icon-park'
import { css } from '$libs'
import { HEADER_HEIGHT } from '$platform'
import { settings, useSettingsSnapshot } from '$settings'
import { isCurrentTyping } from '$utility/dom'
import { useKeyPress, useMemoizedFn } from 'ahooks'
import { Button, Space } from 'antd'
import {
  CSSProperties,
  MouseEvent,
  MouseEventHandler,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useSticky } from 'react-use-sticky'
import { proxy, useSnapshot } from 'valtio'
import { AccessKeyManage } from './AccessKeyManage'
import { ModalFeed } from './ModalFeed'

const verticalAlignStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const configStyles = {
  btn: css`
    padding: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    ${verticalAlignStyle}
  `,
  icon: css`
    svg {
      width: 14px;
      height: 14px;
    }
  `,
}

export const headerState = proxy({
  modalFeedVisible: settings.initialShowMore,
  modalConfigVisible: false,
})

export const useHeaderState = function () {
  return useSnapshot(headerState)
}

const showModalFeed = () => {
  headerState.modalFeedVisible = true
}
const hideModalFeed = () => {
  headerState.modalFeedVisible = false
}

const showModalConfig = () => {
  headerState.modalConfigVisible = true
}
const hideModalConfig = () => {
  headerState.modalConfigVisible = false
}

type RecHeaderProps = {
  onRefresh: () => void | Promise<void>
}
export function RecHeader({ onRefresh }: RecHeaderProps) {
  const { accessKey, pureRecommend, usePcDesktopApi } = useSettingsSnapshot()

  const { modalFeedVisible, modalConfigVisible } = useSnapshot(headerState)
  useKeyPress(
    ['shift.comma'],
    (e) => {
      if (isCurrentTyping()) return
      headerState.modalConfigVisible = !headerState.modalConfigVisible
    },
    { exactMatch: true }
  )

  const [stickyRef, sticky] = useSticky<HTMLDivElement>()

  return (
    <>
      <div
        ref={stickyRef}
        className='area-header'
        css={[
          css`
            margin-bottom: 0;
            height: 50px;
          `,
          pureRecommend &&
            css`
              position: sticky;
              top: ${HEADER_HEIGHT}px;
              z-index: 1000;
            `,
          pureRecommend &&
            sticky &&
            css`
              background-color: var(--bg1_float);
              box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
            `,
        ]}
      >
        <div className='left'>
          <a id='影视' className='the-world area-anchor' data-id='25'></a>
          <svg className='icon'>
            <use href='#channel-cinephile'></use>
          </svg>
          <a className='title' href='#'>
            <span>推荐</span>
          </a>
        </div>

        <div className='right'>
          <Space size={'small'}>
            {!usePcDesktopApi && !accessKey && <AccessKeyManage style={{ marginLeft: 5 }} />}

            <Button onClick={showModalConfig} css={configStyles.btn}>
              <IconPark name='Config' css={configStyles.icon} />
            </Button>

            <RefreshButton onClick={onRefresh} />

            {!pureRecommend && (
              <Button css={verticalAlignStyle} onClick={showModalFeed}>
                <span>查看更多</span>
                <svg
                  css={css`
                    width: 12px;
                    height: 12px;
                    margin-left: 2px;
                  `}
                >
                  <use href='#widget-arrow'></use>
                </svg>
              </Button>
            )}
          </Space>
        </div>
      </div>

      <ModalFeed show={modalFeedVisible} onHide={hideModalFeed} />
      <ModalSettings show={modalConfigVisible} onHide={hideModalConfig} />
    </>
  )
}

export type RefreshButtonActions = { click: () => void }
export type RefreshButtonProps = {
  style?: CSSProperties
  className?: string
  onClick?: (e?: MouseEvent) => void
}
export const RefreshButton = forwardRef<RefreshButtonActions, RefreshButtonProps>(function (
  { onClick, className = '', style },
  ref
) {
  const { modalConfigVisible, modalFeedVisible } = useHeaderState()
  const refreshHotkeyEnabled = !(modalConfigVisible || modalFeedVisible)

  const [deg, setDeg] = useState(0)

  const btnOnClickHandler: MouseEventHandler = useMemoizedFn((e?: MouseEvent) => {
    setDeg((d) => d + 360)
    return onClick?.(e)
  })

  // click from outside
  const btn = useRef<HTMLButtonElement>(null)
  useImperativeHandle(
    ref,
    () => ({
      click() {
        btn.current?.click()
      },
    }),
    []
  )

  // refresh
  useKeyPress(
    'r',
    () => {
      if (!refreshHotkeyEnabled) return
      if (isCurrentTyping()) return
      btn.current?.click()
    },
    { exactMatch: true }
  )

  return (
    <Button
      className={className}
      style={style}
      css={css`
        ${verticalAlignStyle}
        &.ant-btn:not(:disabled):focus-visible {
          outline: none;
        }
      `}
      ref={btn}
      onClick={btnOnClickHandler}
    >
      <svg
        style={{
          transform: `rotate(${deg}deg)`,
          width: '11px',
          height: '11px',
          marginRight: 5,
          transition: deg === 360 ? 'transform .5s ease' : 'unset',
        }}
        onTransitionEnd={() => {
          setDeg(0)
        }}
      >
        <use href='#widget-roll'></use>
      </svg>
      <span>换一换</span>
    </Button>
  )
})
