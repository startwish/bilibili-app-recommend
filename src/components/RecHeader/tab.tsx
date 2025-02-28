import { APP_NAME } from '$common'
import { proxyWithLocalStorage } from '$common/hooks/proxyWithLocalStorage'
import { type OnRefresh } from '$components/RecGrid/useRefresh'
import { HelpInfo } from '$components/piece'
import { IconPark } from '$icon-park'
import { useSettingsSnapshot } from '$settings'
import { checkLoginStatus, useHasLogined } from '$utility'
import { css } from '@emotion/react'
import { Radio } from 'antd'
import type { TabType } from './tab.shared'
import { toastNeedLogin, useCurrentSourceTab, useCurrentTabConfig } from './tab.shared'

export const VIDEO_SOURCE_TAB_STORAGE_KEY = `${APP_NAME}-video-source-tab`

export const videoSourceTabState = proxyWithLocalStorage<{ value: TabType }>(
  { value: 'recommend-app' },
  VIDEO_SOURCE_TAB_STORAGE_KEY,
)

export const iconCss = css`
  margin-right: 4px;
  margin-top: -1px;
`

const radioBtnCss = css`
  height: 26px;
  line-height: unset;

  &:has(:focus-visible) {
    outline: none;
    outline-offset: unset;
  }

  > .ant-radio-button + span {
    height: 100%;
  }
`

const radioBtnStandardCss = css`
  height: 32px;
`

export function VideoSourceTab({ onRefresh }: { onRefresh: OnRefresh }) {
  const logined = useHasLogined()
  const tab = useCurrentSourceTab()
  const { styleUseStandardVideoSourceTab } = useSettingsSnapshot()
  const currentTabConfig = useCurrentTabConfig()

  return (
    <>
      <Radio.Group
        optionType='button'
        buttonStyle='solid'
        size='middle'
        value={tab}
        style={{ overflow: 'hidden' }}
        onFocus={(e) => {
          // 不移除 focus, refresh `r` 无法响应
          const target = e.target as HTMLElement
          target.blur()
        }}
        onChange={(e) => {
          const newValue = e.target.value as TabType

          if (newValue !== 'recommend-app' && newValue !== 'recommend-pc' && !logined) {
            if (!checkLoginStatus()) {
              return toastNeedLogin()
            }
          }

          videoSourceTabState.value = newValue

          // so that `RecGrid.refresh` can access latest `tab`
          setTimeout(() => {
            // reuse results & keep original order when switch tab
            onRefresh(true, { watchlaterKeepOrder: true })
          })
        }}
      >
        {currentTabConfig.map(({ key, label, icon, iconProps }) => (
          <Radio.Button
            css={[radioBtnCss, styleUseStandardVideoSourceTab && radioBtnStandardCss]}
            className='video-source-tab' // can be used to customize css
            tabIndex={-1}
            value={key}
            key={key}
          >
            <span
              css={css`
                display: flex;
                align-items: center;
                line-height: unset;
                height: 100%;
              `}
            >
              <IconPark name={icon} {...iconProps} size={iconProps?.size || 18} css={iconCss} />
              {label}
            </span>
          </Radio.Button>
        ))}
      </Radio.Group>
      <HelpInfo
        iconProps={{ name: 'Tips', size: 16, style: { marginLeft: 6 } }}
        tooltip={
          <>
            {currentTabConfig.map(({ key, label, icon, iconProps, desc }) => (
              <div
                key={key}
                css={css`
                  display: flex;
                  align-items: center;
                  height: 22px;
                `}
              >
                <IconPark name={icon} {...iconProps} size={iconProps?.size || 18} css={iconCss} />
                {label}: {desc}
              </div>
            ))}
          </>
        }
      />
    </>
  )
}
