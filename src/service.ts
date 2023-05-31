import { baseDebug } from '$common'
import { getColumnCount } from '$components/RecGrid/useShortcut'
import { anyFilterEnabled, filterVideos } from '$components/VideoCard/process/filter'
import { RecItemType } from '$define'
import { DynamicFeedService } from '$service-dynamic-feed'
import { settings } from '$settings'
import { hasLogined } from '$utility'
import { uniqBy } from 'lodash'
import * as app from './service-app'
import * as pc from './service-pc'
import { PcRecService } from './service-pc'

const debug = baseDebug.extend('service')

export const recItemUniqer = (item: RecItemType) =>
  item.api === 'pc'
    ? item.id
    : item.api === 'app'
    ? item.param
    : item.modules.module_dynamic.major.archive.aid

export function uniqConcat(existing: RecItemType[], newItems: RecItemType[]) {
  const ids = existing.map(recItemUniqer)
  newItems = uniqBy(newItems, recItemUniqer)
  return existing.concat(
    newItems.filter((item) => {
      return !ids.includes(recItemUniqer(item))
    })
  )
}

export const usePcApi = () => settings.usePcDesktopApi || (settings.dynamicMode && hasLogined())

export async function getMinCount(
  count: number,
  pcRecService: PcRecService,
  dynamicFeedService: DynamicFeedService,
  filterMultiplier = 5
) {
  let items: RecItemType[] = []

  let addMore = async (restCount: number) => {
    const pagesize = settings.usePcDesktopApi ? pc.PAGE_SIZE : app.PAGE_SIZE
    const multipler = anyFilterEnabled()
      ? filterMultiplier // 过滤, 需要大基数
      : 1.2 // 可能有重复, so not 1.0
    const times = Math.ceil((restCount * multipler) / pagesize)
    debug(
      'getMinCount: addMore(restCount = %s) multipler=%s pagesize=%s times=%s',
      restCount,
      filterMultiplier,
      pagesize,
      times
    )

    let cur: RecItemType[] = []
    if (settings.usePcDynamicApi && hasLogined()) {
      cur = (await dynamicFeedService.next()) || []
    } else {
      cur = usePcApi()
        ? await pcRecService.getRecommendTimes(times)
        : await app._getRecommendTimes(times)
      cur = filterVideos(cur)
    }

    items = items.concat(cur)
    items = uniqBy(items, recItemUniqer)
  }

  await addMore(count)
  while (items.length < count) {
    await addMore(count - items.length)
  }

  return items
}

export async function getRecommendForHome(
  pcRecService: PcRecService,
  dynamicFeedService: DynamicFeedService
) {
  return getMinCount(getColumnCount(undefined, false) * 2, pcRecService, dynamicFeedService, 3) // 7 * 2-row
}

export async function getRecommendForGrid(
  pcRecService: PcRecService,
  dynamicFeedService: DynamicFeedService
) {
  return getMinCount(getColumnCount() * 3, pcRecService, dynamicFeedService, 5) // 7 * 3-row, 1 screen
}

export async function getRecommendTimes(times: number, pcRecService: PcRecService) {
  let items: RecItemType[] = usePcApi()
    ? await pcRecService.getRecommendTimes(times)
    : await app._getRecommendTimes(times)
  items = filterVideos(items)
  return items
}
