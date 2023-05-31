/* eslint-disable @typescript-eslint/no-empty-interface */

// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface DynamicFeedJson {
  code: number
  message: string
  ttl: number
  data: Data
}

export interface Data {
  has_more: boolean
  items: DynamicFeedItem[]
  offset: string
  update_baseline: string
  update_num: number
}

export interface DynamicFeedItem {
  basic: Basic
  id_str: string
  modules: Modules
  type: ItemType
  visible: boolean
}

export interface Basic {
  comment_id_str: string
  comment_type: number
  like_icon: LikeIcon
  rid_str: string
}

export interface LikeIcon {
  action_url: string
  end_url: string
  id: number
  start_url: string
}

export interface Modules {
  module_author: ModuleAuthor
  module_dynamic: ModuleDynamic
  module_interaction?: ModuleInteraction
  module_more: ModuleMore
  module_stat: ModuleStat
}

export interface ModuleAuthor {
  avatar: Avatar
  face: string
  face_nft: boolean
  following: boolean
  jump_url: string
  label: string
  mid: number
  name: string
  official_verify: OfficialVerify
  pendant: Pendant
  pub_action: PubAction
  pub_location_text: string
  pub_time: string
  pub_ts: number
  type: ModuleAuthorType
  vip: Vip
  decorate?: Decorate
}

export interface Avatar {
  container_size: ContainerSize
  fallback_layers: FallbackLayers
  mid: string
}

export interface ContainerSize {
  height: number
  width: number
}

export interface FallbackLayers {
  is_critical_group: boolean
  layers: Layer[]
}

export interface Layer {
  general_spec: GeneralSpec
  layer_config: LayerConfig
  resource: Resource
  visible: boolean
}

export interface GeneralSpec {
  pos_spec: PosSpec
  render_spec: RenderSpec
  size_spec: ContainerSize
}

export interface PosSpec {
  axis_x: number
  axis_y: number
  coordinate_pos: number
}

export interface RenderSpec {
  opacity: number
}

export interface LayerConfig {
  is_critical?: boolean
  tags: Tags
}

export interface Tags {
  AVATAR_LAYER?: AVATARLAYERClass
  GENERAL_CFG?: GeneralCFG
  ICON_LAYER?: AVATARLAYERClass
  PENDENT_LAYER?: AVATARLAYERClass
}

export interface AVATARLAYERClass {}

export interface GeneralCFG {
  config_type: number
  general_config: GeneralConfig
}

export interface GeneralConfig {
  web_css_style: WebCSSStyle
}

export interface WebCSSStyle {
  'borderRadius': BorderRadius
  'background-color'?: BackgroundColor
  'border'?: Border
  'boxSizing'?: BoxSizing
}

export enum BackgroundColor {
  RGB255255255 = 'rgb(255,255,255)',
}

export enum Border {
  The2PxSolidRGBA2552552551 = '2px solid rgba(255,255,255,1)',
}

export enum BorderRadius {
  The50 = '50%',
}

export enum BoxSizing {
  BorderBox = 'border-box',
}

export interface Resource {
  res_image: ResImage
  res_type: number
}

export interface ResImage {
  image_src: ImageSrc
}

export interface ImageSrc {
  placeholder?: number
  remote?: Remote
  src_type: number
  local?: number
}

export interface Remote {
  bfs_style: BFSStyle
  url: string
}

export enum BFSStyle {
  WidgetLayerAvatar = 'widget-layer-avatar',
}

export interface Decorate {
  card_url: string
  fan: Fan
  id: number
  jump_url: string
  name: string
  type: number
}

export interface Fan {
  color: string
  is_fan: boolean
  num_str: string
  number: number
}

export interface OfficialVerify {
  desc: string
  type: number
}

export interface Pendant {
  expire: number
  image: string
  image_enhance: string
  image_enhance_frame: string
  name: Name
  pid: number
}

export enum Name {
  Empty = '',
  年度猫片 = '年度猫片',
  第五人格 = '第五人格',
}

export enum PubAction {
  发布了动态视频 = '发布了动态视频',
  投稿了视频 = '投稿了视频',
}

export enum ModuleAuthorType {
  AuthorTypeNormal = 'AUTHOR_TYPE_NORMAL',
}

export interface Vip {
  avatar_subscript: number
  avatar_subscript_url: string
  due_date: number
  label: LabelClass
  nickname_color: Color
  status: number
  theme_type: number
  type: number
}

export interface LabelClass {
  bg_color: Color
  bg_style: number
  border_color: string
  img_label_uri_hans: string
  img_label_uri_hans_static: string
  img_label_uri_hant: string
  img_label_uri_hant_static: string
  label_theme: LabelTheme
  path: string
  text: LabelText
  text_color: TextColorEnum
  use_img_label: boolean
}

export enum Color {
  Empty = '',
  Fb7299 = '#FB7299',
}

export enum LabelTheme {
  AnnualVip = 'annual_vip',
  Empty = '',
  TenAnnualVip = 'ten_annual_vip',
}

export enum LabelText {
  Empty = '',
  十年大会员 = '十年大会员',
  年度大会员 = '年度大会员',
}

export enum TextColorEnum {
  Empty = '',
  Ffffff = '#FFFFFF',
}

export interface ModuleDynamic {
  additional: Additional | null
  desc: Desc | null
  major: Major
  topic: Topic | null
}

export interface Additional {
  common: Common
  type: string
}

export interface Common {
  button: Button
  cover: string
  desc1: string
  desc2: string
  head_text: string
  id_str: string
  jump_url: string
  style: number
  sub_type: string
  title: Name
}

export interface Button {
  jump_style: JumpStyle
  jump_url: string
  type: number
}

export interface JumpStyle {
  icon_url: string
  text: string
}

export interface Desc {
  rich_text_nodes: RichTextNode[]
  text: string
}

export interface RichTextNode {
  jump_url?: string
  orig_text: string
  text: string
  type: RichTextNodeType
  rid?: string
}

export enum RichTextNodeType {
  RichTextNodeTypeAt = 'RICH_TEXT_NODE_TYPE_AT',
  RichTextNodeTypeText = 'RICH_TEXT_NODE_TYPE_TEXT',
  RichTextNodeTypeTopic = 'RICH_TEXT_NODE_TYPE_TOPIC',
}

export interface Major {
  archive: Archive
  type: MajorType
}

export interface Archive {
  aid: string
  badge: Badge
  bvid: string
  cover: string
  desc: string
  disable_preview: number
  duration_text: string
  jump_url: string
  stat: Stat
  title: string
  type: number
}

export interface Badge {
  bg_color: Color
  color: TextColorEnum
  icon_url: null
  text: BadgeText
}

export enum BadgeText {
  动态视频 = '动态视频',
  投稿视频 = '投稿视频',
}

export interface Stat {
  danmaku: string
  play: string
}

export enum MajorType {
  MajorTypeArchive = 'MAJOR_TYPE_ARCHIVE',
}

export interface Topic {
  id: number
  jump_url: string
  name: string
}

export interface ModuleInteraction {
  items: ModuleInteractionItem[]
}

export interface ModuleInteractionItem {
  desc: Desc
  type: number
}

export interface ModuleMore {
  three_point_items: ThreePointItem[]
}

export interface ThreePointItem {
  label: LabelEnum
  type: ThreePointItemType
}

export enum LabelEnum {
  举报 = '举报',
  取消关注 = '取消关注',
}

export enum ThreePointItemType {
  ThreePointFollowing = 'THREE_POINT_FOLLOWING',
  ThreePointReport = 'THREE_POINT_REPORT',
}

export interface ModuleStat {
  comment: Comment
  forward: Comment
  like: Like
}

export interface Comment {
  count: number
  forbidden: boolean
}

export interface Like {
  count: number
  forbidden: boolean
  status: boolean
}

export enum ItemType {
  DynamicTypeAV = 'DYNAMIC_TYPE_AV',
}
