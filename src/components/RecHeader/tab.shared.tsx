import type { IconName } from '$icon-park'
import { useSettingsSnapshot } from '$settings'
import { getHasLogined, useHasLogined } from '$utility'
import { toast } from '$utility/toast'
import { type Icon } from '@icon-park/react/es/runtime'
import type { ComponentProps } from 'react'
import { useMemo } from 'react'
import { useSnapshot } from 'valtio'
import { videoSourceTabState } from './tab'

export type TabType =
  | 'recommend-app'
  | 'recommend-pc'
  | 'keep-follow-only'
  | 'dynamic-feed'
  | 'watchlater'
  | 'fav'
  | 'popular-general'
  | 'popular-weekly'

type TabConfigItem = {
  key: TabType
  icon: IconName
  iconProps?: ComponentProps<Icon>
  label: string
  desc: string
  swr?: boolean // stale while revalidate
}

export const TabConfig: TabConfigItem[] = [
  {
    key: 'recommend-app',
    icon: 'Iphone',
    label: '推荐',
    desc: '使用 Bilibili App 端推荐 API',
  },
  {
    key: 'recommend-pc',
    icon: 'Computer',
    label: '推荐',
    desc: '使用新版首页顶部推荐 API',
  },
  {
    key: 'keep-follow-only',
    icon: 'Concern',
    label: '已关注',
    desc: '推荐中只保留「已关注」,会很慢',
  },
  {
    key: 'dynamic-feed',
    icon: 'Tumblr',
    iconProps: { size: 16 },
    label: '动态',
    desc: '视频投稿动态',
    swr: true,
  },
  {
    key: 'watchlater',
    icon: 'FileCabinet',
    iconProps: { size: 15 },
    label: '稍后再看',
    desc: '你添加的稍后再看; 默认随机乱序, 可在设置中关闭乱序',
    swr: true,
  },
  {
    key: 'fav',
    icon: 'Star',
    iconProps: { size: 15 },
    label: '收藏',
    desc: '你添加的收藏; 默认随机乱序, 可在设置中关闭乱序',
  },
  {
    key: 'popular-general',
    icon: 'Fire',
    iconProps: { size: 16 },
    label: '综合热门',
    desc: '各个领域中新奇好玩的优质内容都在这里~',
    swr: true,
  },
  {
    key: 'popular-weekly',
    icon: 'TrendTwo',
    iconProps: { size: 15 },
    label: '每周必看',
    desc: '每周五晚 18:00 更新',
  },
]

export const TabConfigMap = TabConfig.reduce((val, configItem) => {
  return { ...val, [configItem.key]: configItem }
}, {}) as Record<TabType, TabConfigItem>

export const TabKeys = TabConfig.map((x) => x.key)

export function useCurrentShowingTabKeys(): TabType[] {
  const { hidingTabKeys } = useSettingsSnapshot()
  return useMemo(() => TabKeys.filter((key) => !hidingTabKeys.includes(key)), [hidingTabKeys])
}

export function sortTabKeys(customTabKeysOrder: TabType[]) {
  return TabKeys.slice().sort((a, b) => {
    let aIndex = customTabKeysOrder.indexOf(a)
    let bIndex = customTabKeysOrder.indexOf(b)
    if (aIndex === -1) aIndex = TabKeys.indexOf(a)
    if (bIndex === -1) bIndex = TabKeys.indexOf(b)
    return aIndex - bIndex
  })
}

export function useSortedTabKeys() {
  const { customTabKeysOrder } = useSettingsSnapshot()
  return useMemo(() => sortTabKeys(customTabKeysOrder), [customTabKeysOrder])
}

export function useCurrentTabConfig() {
  const { hidingTabKeys, customTabKeysOrder } = useSettingsSnapshot()
  const logined = useHasLogined()

  return useMemo(() => {
    let tabkeys = sortTabKeys(customTabKeysOrder)
    tabkeys = tabkeys.filter(
      (key) => !hidingTabKeys.includes(key) || (!logined && key === 'recommend-app'),
    )
    return tabkeys.map((k) => TabConfigMap[k])
  }, [hidingTabKeys, customTabKeysOrder, logined])
}

function _getCurrentSourceTab(videoSourceTab: TabType, logined: boolean): TabType {
  // invalid
  if (!TabKeys.includes(videoSourceTab)) return 'recommend-app'

  // not logined
  if (!logined) {
    if (videoSourceTab === 'recommend-app' || videoSourceTab === 'recommend-pc') {
      return videoSourceTab
    } else {
      return 'recommend-app'
    }
  }

  return videoSourceTab
}

export function useCurrentSourceTab(): TabType {
  return _getCurrentSourceTab(useSnapshot(videoSourceTabState).value, useHasLogined())
}

export function getCurrentSourceTab(): TabType {
  return _getCurrentSourceTab(videoSourceTabState.value, getHasLogined())
}

export function toastNeedLogin() {
  return toast('你需要登录B站后使用该功能! 如已完成登录, 请刷新网页重试~')
}

function gotoLogin() {
  const href = 'https://passport.bilibili.com/login'
  location.href = href
}
