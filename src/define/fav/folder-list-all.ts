// Generated by https://quicktype.io

export interface FavFolderListAllJson {
  code: number
  message: string
  ttl: number
  data: Data
}

export interface Data {
  count: number
  list: FavFolderListAllItem[]
  season: null
}

export interface FavFolderListAllItem {
  id: number
  fid: number
  mid: number
  attr: number
  title: string
  fav_state: number
  media_count: number
}
