# Changelog

## v0.20.0

- 支持在弹出窗口打开视频, 支持自动网页全屏 / 全屏

details:

- e44f97a fix: stopPropagation in watchlater click
- 7fda966 chore: tweak tooltip text
- ac61582 feat: add auto fullscreen
- 7aba9f3 feat: open video in popup window
- 5b1c36e fix reference style link
- 2fef454 chore: use markdown rerference link
- 927241a chore: more badges
- a93d37c doc: add readme badges

## v0.19.9

- 稍后再看添加分割线, 可配置
- 使用 body 作为 PureRecommend container, 因与 Bilibili 默认代码冲突

details:

- 9c9a4fd chore: TabPaneVideoSourceTabConfig style tweak
- 4003a3c feat: use body as PureRecommend container
- ffad529 feat: move tab related settings to TabPaneVideoSourceTabConfig
- 56f7466 fix: await default .bili-feed4-layout removal
- b5134ee feat: make separator configurable

## v0.19.8

- e906cc7 feat: use 3rd party back-to-top & rm default float buttons
- 1cae0ff chore: revert float buttons tweak
- 138356f chore: copy bilibili-default.scss
- d0161bd refactor: scss mixin
- c0ae6c1 chore: utilize import.meta.env.DEV / PROD
- b2b9f50 feat: add appApiDevice settings item
- 072a4c4 chore: tweak issue template

## v0.19.7

- 修复 v0.19.6 带来的不喜欢按钮总是显示的问题.

## v0.19.6

- fix 预览卡片变高的问题, [#65](https://github.com/magicdawn/bilibili-app-recommend/issues/65) & [#66](https://github.com/magicdawn/bilibili-app-recommend/issues/66)

其他

- 07f0842 Fix bangumi <num>追番
- 5d0ff2d TS: use export {} to turn .d.ts to a module augmentation

## v0.19.5

- 1c328af Fix GM.openInTab isssue on TamperMonkey, close #63
- 550f280 chore: polish settings text
- 7c3db46 chore: rm btn confirm-by-web-cookie
- 4ec3899 refactor: unify page in rec services
- ad7c324 Use css clamp() function
- 696ffaa chore: style tweaks
- 000a59d chore: ncu deps
- 481fd0f chore: clean up unused code
- e066228 chore: fix refresh postAction
- 61913e5 chore: prevent potential access goto error
- e6cf4e9 chore: filter out banner

## v0.19.4

- 956264f Fix broken wbi-sign

## v0.19.3

- feat: 通知类消息使用 antd.message, toast 作为一种更强的提示
- feat: CI build 使用 `git describe` 作为版本号, 使用 CI build 也能正常更新
- feat: 查看更多按钮可配置
- feat: 在所有 Tab 右键菜单都可以 "查看UP动态"
- fix: 修复某些情况刷新太快列表不完整的问题 (a07bd34)
- fix: sarari 兼容问题
- feat: ItemsSeparator 支持链接

details:

- 059409d feat: support using ReactNode in ItemsSeparator
- f372fac chore: eliminate requestIdleCallback direct usage
- 654118e chore: fix safari + requestIdleCallback
- 3bbe089 chore: tweak wbi.ts
- 99f0227 chore: prettier still rocks
- fdad689 chore: prettier triallingComma use prettier default: all
- 1956206 fix: call checkShouldLoadMore in nextTick in the impl of postAction
- a07bd34 Fix update refreshing too early caused list error
- b5e45a8 chore: fix service construct
- 7d5efd4 feat: dynamicFeedFilterSelectUp in any tab
- 3fb66f8 chore: fix broken types
- a35c481 feat: config for showModalFeedEntry
- 5ccac3f chore: use bvid if possible
- 2b9abc2 feat: use antd css vars
- d194060 chore: more fix
- 1f8ac94 Fix antd message imports
- ec31273 feat: tweak message top config
- 9ec2121 Fix removeCard message duration
- 993b08a chore: fix scriptVersion
- 23a5863 chore: back to use same name, since name -> monkey storage
- b5b7da3 chore: use CI suffix in ci build
- c8cc9fc chore: use process.env.GHD\_\*
- 92779f0 feat: add ci version
- 0230769 chore: rm prev-fix
- b7d92f4 chore: fix mistakes
- 5f93382 feat: substitute toast with more lightweighted antd.message
- 8e4d7c4 chore: clean up codes
- 0a5e630 chore: clean up using knip
- b2f8335 chore: explore scss

## v0.19.2

- Tab 配置优化: dark-mode, drag handle hover 样式, 重置前确认等.
- 重构 less -> scss, less sucks & scss rocks. grid 使用 `--col` css variable.
- 支持 `ItemsSeparator`, video grid 支持非视频卡片的展示, 键盘移动相应重构.
- 查看更多按钮, 总是展示, 增加全屏样式.

details:

- 5ddd387 chore: revert some internal-testing setup
- f276003 feat: hide native refresh button
- d4d1b45 feat: popconfirm for reset video-source-tab dnd
- f5a2a29 feat: add fav none-shuffle separator
- d75350c feat: video grid support Separator type
- 6ce8c80 feat: modal-feed fullscreen
- 3e373a0 chore: more less -> scss
- 407e52b feat: scss is awesome
- bfb644d feat: move less -> scss
- 084d674 feat: 简化 less grid template columns
- 2f1489b chore: tweak dynamic-feed usageInfo clean button style
- 558477d chore: fix changelog ul
- 4b301ae chore: revert fixme
- 2c95d8e feat: video-source-tab dnd sort dark-mode tweaks

## v0.19.1

- 设置页切换 panel 关闭后, 再次打开会保留 panel, 刷新回到默认
- 新设置项, 可拖动排序推荐 Tab

![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/45c09e2d-2f51-4750-b0c7-9daceb393eb1)

details:

- c5a5afd chore: tweak external libs
- 7d1e8e2 refactor: rename access_key things
- 4335689 chore: style tweak
- e8c6f70 chore: rm unused style
- 38d46a7 chore: ncu deps
- e652604 fix: default settings activeKey & rename things
- a51c5b9 feat: dnd sort for video-source-tab
- 32676a8 feat: persist page level modal settings tab
- 1a9cc86 feat: card link hover color use colorPrimary
- bf1f7ca chore: more readme
- 99a5427 feat: add data-bvid & window.bilibili_app_recommend_gridItems
- fb3cfb7 refactor: useRefresh swr related
- 271fef5 feat: add QueueStrategy class
- 85c2a2b chore: new tab refresh text tweaks
- 88c71c9 chore: ncu deps

## v0.19.0

- tab 显示/隐藏 改为黑名单机制
- new tab: 综合热门 & 每周必看

details:

- 132d7ff chore: tweak blackids
- a3bc65a chore: clean up unused settings flag
- 1dd9ca5 chore: tweak
- e15d27d feat: filter against blacklist
- 2c1a18e feat: impl shuffle for popular-weekly
- 5e63b17 chore: more tweaks
- 9d4e12e refactor more service related
- 1efa2dc feat: refactor services & impl tab = popular-weekly
- d19df63 feat: eslint fix type imports
- 072a918 feat: add new tab icons
- a4e4192 feat: tab 显示/隐藏 改为黑名单机制
- 67caf8d feat: popular-general 综合热门
- a15bfe0 chore: add nextTick before exec preAction
- 77d99a7 feat: add classnames package back
- e8ae11b chore: update pnpm lock file
- 1290854 chore: clean up
- 77f41e8 chore: use 0 as stat number fallback
- 63efe00 feat: add stat number fallback

## v0.18.5

- feat: watch later add 动画
- fix: 深色模式 avatar skeleton 背景颜色不正确的问题
- feat: 移除魔法棒 logo
- feat: 字体调整 HarmonyOS_Regular / PingFang SC 顺序, 优先 HarmonyOS_Regular, 主要影响 macOS
- fix: 弹幕数量没有格式化的问题

detail

- be6776b fix stat danmaku not formated
- dd46a39 feat: more root container add APP_NAME_ROOR_CLASSNAME
- 6fed6ec feat: prefer Harmony_Regular even on macOS
- 67b3b7d feat: only keep section logo for new-version homepage & SectionRecommend, close #58
- b9c0a4b chore: rename things
- ba00009 feat: use imperative animate instead of transform + onTransitionEnd
- d433035 deps: ncu
- b4e474e Fix avatar skeleyon background in dark mode
- e867cc1 chore: modify readme +
- 6a551db chore: modify readme
- 3be9679 Fix theme select center style
- 0ccfa5a chore: fix ghproxy domain
- 4a3d78a fix: moving ts file issue
- 2d0b8f5 feat: split x.shared.ts required by react Fast Refresh
- d5c609a feat: animation of watchLaterAdded
- 0616d37 deps: ncu
- b0d13f2 chore: change ghproxy.com to gh-proxy.com
- ee1827f chore: update readme
- d2f3a90 doc: add more to readme

## v0.18.4

- 17c7ef3 Optimize article draft setData
- 53b4d2f chore: rm completed todo items
- 0acc616 chore: style tweaks
- 6e3010d feat: skeleton with avatar
- 1aac1aa feat: active box-shadow
- c65fb3d fix: update deps & fix mixed content caused by avatar http url
- 1702462 feat: add filterEnabled switch like a valve
- e1ab51b chore: add special hash entry comment
- b6511bd feat: try using bewly chrome-ext & userscript both
- b22f4f2 feat: app recommend api use ipad device to get large_cover_v1 card
- ef703cf fix boolean default typo
- a852f9d feat: fancy style

## v0.18.3

- fix quick fav, default using folder selection influenced by exclude fav folder issue
- fix fav folder count issue

## v0.18.2

- 6139457 chore: refactor names
- 89251f6 chore: back to @violentmonkey/types
- 5ac62fc feat: add openInBackground context-menu

## v0.18.1

- feat: support confirm qrcode login with pc cookie, optimize 扫码流程

## v0.18.0

- feat: support simulate TV to scan QRCode to get access_key, based on [BAC TV登录](https://socialsisteryi.github.io/bilibili-API-collect/docs/login/login_action/QR.html#tv%E7%AB%AF%E6%89%AB%E7%A0%81%E7%99%BB%E5%BD%95), see #53

## v0.17.11

- chore: update deps
- feat: switch to npmmirror
- fix: disable watchlater entry for tab=app & none video recommend

## v0.17.10

- 支持选择要显示的 Tab

detail

- 1504764 chore: style tweak
- c73f719 chore: add showingTabKeys reset button
- 814ba91 feat: add support to hide some tabs
- f21881f chore: eacape selector
- 09750f8 opt: tweak vite.config.ts

## v0.17.9

- df24bf8 chore: try virtuoso again
- 57f7ef9 feat: rm float button '刷新内容'
- ec7e9ff chore: update antd
- 94308ab fix: old typo
- 1b2d29d chore: rename tab key
- edb6042 feat(dynamic-feed): add clear button
- 4757869 feat: use GM.xmlHttpRequest to get redirect url
- 817354e chore: move .module.less -> emotion/css
- a2b9bc7 fix: react boolean &&
- 30ba95d fix: goto=picture statItem

## v0.17.8

- 动态右键菜单: 快速筛选 UP
- 「查看更多」弹窗也支持 extraInfo 了

![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/06a08386-4d90-4178-875d-4241eaec38f9)

## v0.17.7

- 2070c84 feat: set popup container for fav tab - fav folder ignore popover
- 51c671b feat: 动态支持筛选

## v0.17.6

- 49b2e4f fix: PreviewImage replace /pvideo with /x/player/videoshot api

其他

- 6187472 feat: use different text for shuffle on/off
- a704418 feat: support unfollow context-menu item

## v0.17.5

- move to cdn.bytedance.com from unpkg.com

## v0.17.4

- 在 v0.17.3 中引入了将 media query range syntax, 从 chrome 104 开始支持. 本次引入 postcss-media-minmax transform.

## v0.17.3

- access_key 获取: 因 mcbbs.net 不能再通过 iframe 访问, 改为弹出窗口获取 access_key

## v0.17.2

- pc recommend, 使用 wbi 接口

## v0.17.1

- 备份设置: 调用专栏 API 会 throttle 处理
- 收藏 Tab: 增加随机乱序 toggle
- 内容过滤: 功能重构, 已关注拆分成 goto=av 视频已关注 & goto=picture 图文已关注

详细

- aff1313 chore: prevent popover-open class influence Tag font-size
- 9406e9a feat: revert enableFilterForFollowedPicture, goto=picture also has follow related
- 49b6408 chore: clean up legacy code, since goto = picture has no follow
- dea5fbf chore: fix turbo config
- 10ba241 chore: fix tsconfig
- 1e3a925 feat: add toggle for shuffleForFav
- 8c9c847 deps: ncu-safe
- de22ca6 readme: more compatibility info
- 7de6135 refactor video filter

## v0.17.0

- feat: 支持使用专栏草稿箱作为备份存储, 备份设置项
- feat: 收藏 Tab, 支持过滤收藏夹
- feat: video source tab, 改成 localStorage 存储, 切换 Tab 不会触发备份

![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/41408b67-fbad-4e3d-b181-dd51f3b42518)

![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/6c76638f-eba4-4b51-92e6-76feef154c26)

![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/021fa5f4-1639-4f26-89ae-98eba0ac62f8)

## v0.16.8

- feat: 稍候再看 Tab: 支持快速收藏, 点击已收藏则浏览收藏夹

## v0.16.7

- feat: 支持在推荐 Tab 快速拉黑视频作者

![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/b7cbe6de-dc4c-4c45-909a-0392aaa66add)

![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/a48df3b5-0028-4100-8780-c40b61134b63)

## v0.16.6

Noteable changes:

- 202de58 feat: add filterOutGotoTypePicture, move autoPreviewUpdateInterval to 高级设置
- e21bb61 ts: turn on strict

## v0.16.5

- 9dea53c chore: update deps
- 0648413 chore: tweak margin
- d6267fd dep: replace lru-cache with quick-lru
- 851571b fix: scrollTop collapsed to 0 in chrome
- 1933fc8 feat: add toggle shuffle in watchlater.usageInfo
- f8004d2 chore: revert description
- 928fa33 chore: clean up
- 298b07e feat: more tweaks

## v0.16.4

- 8db4a35 chore: tweak desc again
- 2ee68ef chore: update description
- 9b9384d refactor: improve auth getAccessKey
- 4c6c11f chore: use black backgorund for tooltip in ThemeSelect
- 02e5dca chore: video-source-tab style tweak
- 1934707 fix: video-source-tab icon & text vertical align
- 475fc03 feat: disable dislike entry for video which does not contain three_point.dislike_reasons
- f6e0e9e feat: change tooltip backgroud-color to colorPrimary
- d00e667 feat: improve firefox compatibility

## v0.16.3

- 所有 Tab: 稍后再看状态改为全局状态, 推荐/动态/收藏 等 Tab 中的视频可以保持稍后再看状态.
- 稍后再看 Tab: 移除稍后再看, 可以看到是否已经添加收藏. 在清理稍候再看列表时比较有用.

![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/26053d9c-2543-4ffb-ac20-9b052a6807c2)

## v0.16.2

- 收藏 Tab 支持右键菜单移除收藏
- 右键菜单添加图标
- 收藏 Tab, 切换 Tab, 内容保持不变. (更快的切换 Tab)

详细

- 5ef25ef feat: keep fav tab content when switch tab
- 4916b09 feat: add context-menu icons
- f071266 feat: [tab=fav] add remove-fav context menu
- 9aa04dd feat: add removeFav to card.service.ts
- d9d7e83 refactor: indeterminate state

## v0.16.1

- 115df88 chore: revert react type augment
- 34ea9ef feat: use css variable --[app-prefix]-color-primary
- c52f16c feat: explicit mark fav folder
- 9da44f0 chore: modify shuffleForFav default value
- f846eb9 chore: settings tweak
- efaeba5 feat: add open-fav-folder context menu for fav tab
- 5aae109 feat: add FavService.usageInfo
- bea32d0 feat: improve fav shuffle

## v0.16.0

- feat: initial support of 「收藏」 Tab

## v0.15.1

- feat: 大卡片样式, 同步 YouTube 12px 圆角
- feat: 内测模式首页, 支持在纯推荐模式下点「退出内测」等功能按键
- refactor: 卡片相关快捷键, 从 forwardRef+useImperativeHandle 重构成 mitt+useMittOn, 中间使用过 ahooks.useEventEmitter
- fix: 设置弹框多个滚动条
- feat: 稍后再看, 移到最前: 会先本地修改数据移到最前

## v0.15.0

- refactor: 使用 react-intersection-observer 代替 react-infinite-scroller 实现无限加载
- feat: 稍后再看视频卡片, 右键菜单, 重新添加(移到最前)
- feat: 稍后再看, 支持保持顺序刷新, 切换 tab 的 swr 刷新会保持顺序
- feat: 优化 loading, 之前是纯文字
- feat: add styleUseStandardVideoSourceTab & youtube-like card style

## v0.14.5

- 修复稍后再看卡住问题, see #41

## v0.14.4

- fix: update watchlater usageInfo after removeCard
- feat: add script icon

FULL https://github.com/magicdawn/bilibili-app-recommend/compare/v0.14.3...main

## v0.14.3 2023-06-16

- feat: support login without refresh
- fix unlogin video-source-tab can not switch to recommend-pc issue

## v0.14.2 2023-06-16

- feat: normalize watchlater, Tab 切换会使用缓存, 动态和稍后再看会使用 swr(stale while revalidate)
- chore: add more links

## v0.14.1 2023-06-16

- feat: add .video-source-tab
- feat: [theme] add bilibili blue

## v0.14.0 2023-06-16

- 移除 API 切换设置, 变成 Tab. 加了手机 & 电脑 icon, 方便区分
- 稍后再看 Tab, 增加容量提示
- 优化 bundle
- icon park 图标使用 `currentColor`
- 其他的 fix

详细

- 8ae9cae feat: add more icons
- 87e7a64 feat: add icons to rec tabs
- e95749c refactor: use tab parameter
- 545409b feat: remove usePcDesktopApi
- 572e74a fix react-use-sticky
- 889eee1 chore: fix typecheck
- 06e73f3 feat: show watchlater capacity
- c788082 fix: [watchlater] open-in-iina url
- 4303f10 chore: icon-park related tweak
- 8b29876 chore: optimize bundle size

## v0.13.3 2023-06-15

- chore: add delay to safari

## v0.13.2 2023-06-14

- 支持 safari + Userscripts

详细

- f125768 feat: add readme
- 0721518 feat: support safari UserScripts
- 1b520f9 feat: show watchlater detail time in title attr
- d9349b2 chore: clean up dist
- 963e38f feat: [watchlater] slice when used in home
- e8253ca chore: explore no-minify
- 30accc2 refactor: tweak

## v0.13.1 2023-06-13

- fcd25f1 chore: watchlater text tweak
- 7314ddd fix BaseModal z-index
- f5f7481 feat: more items on video-card context-menu
- 5989bed feat: remove parallelRequest setting item
- 3265fc7 feat: increase onlyFollow loadMore api call
- 92256f1 chore: update deps
- 1aa2627 chore: tweak
- 9fc82d6 feat: import vitest
- d9739cd chore: style tweak
- c660304 chore: tweak
- 80736f9 chore: tweak watchlater card display
- ee3cfc0 chore: tweak no-shuffle threshold value

## v0.13.0 2023-06-09

- 稍后再看 Tab

## v0.12.7 2023-06-08

- 8a8f822 feat: add Tab key support
- 9129f9d feat: use bilibili.com default font, close #36
- b3140ea refactor: a lot
- a87830e fix: VideoSourceTab focus issue
- 25eeda3 chore: more tweaks

## v0.12.6 2023-06-08

- feat: support abort refresh request, close #34

## v0.12.5 2023-06-07

- 6ecadfc fix: remove antd.App wrapper, close #35
- b3944bf feat: video-card context-menu on img only

## v0.12.4 2023-06-07

- feat: 视频卡片右键菜单
- chore: 改善 RecGrid 刷新 scrollTop 抖动的问题

## v0.12.3 2023-06-03

- 修复快速切换 Tab, 可能出现卡住的情况

详细

- chore: add toast on pc api no items
- 281924a feat: fix requesting.current check

## v0.12.2 2023-06-03

- feat: improve compatiblity with Bilibili-Evolved

## v0.12.1 2023-06-01

- 838c0a2 feat: tab btn style tweak
- 3c8b702 chore: scroll back 4px
- 85c00ad feat: refresh 滚动逻辑优化
- 68b1336 chore: refactor
- 249c9c7 chore: rename
- 5e85445 feat: unify using getCurrentSourceTab & useCurrentSourceTab

## v0.12.0 2023-05-31

- feat: rename "动态模式" -> "已关注"
- feat: 动态-视频投稿

## v0.11.7 2023-05-30

- feat: 动态模式, 只保留「已关注」

## v0.11.6 2023-05-28

- fix: 修复 内测模式首页 + SectionRecommend, channel header fixed 异常的问题(直接移除该 channel header)

## v0.11.5 2023-05-28

- d2fc52f chore: add more readme
- 866b40f chore: not supported note on safari
- 39a86c6 chore: use global.less
- 6c3cd45 chore: update deps
- e965dfa fix tooltip link color

## v0.11.4 2023-05-22

- feat: add more themes
  ![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/7884359f-6b35-4ca3-8842-9815a4487d04)

## v0.11.3 2023-05-21

- 814243c feat: add color-picker theme
- e2b758f chore: take care of antd z-index
- de2c61d chore: prevent multiple refresh

## v0.11.2 2023-05-18

- using BV id everywhere
- clean up code

## v0.11.1 2023-05-17

- UI tweak: 统一 button 实现到 `antd.Button`, toast 等会使用所选的主题色

## v0.11.0 2023-05-16

- feat: 设置弹框使用 Tab 分割
- feat: 引入 lx-music-desktop 中的主题选择, 墙裂推荐「重斤球紫」🤳

![image](https://github.com/magicdawn/bilibili-app-recommend/assets/4067115/456c8045-4c79-4044-a8bb-ca46dcc17dc4)

## v0.10.10 2023-05-13

- feat(过滤器): 默认不过滤「已关注」，可以在设置中打开

## v0.10.9 2023-05-12

- 这个版本是对 v0.10.7 的修复.
- RecGrid「刷新」与「加载更多」逻辑修复, 之前 revert 是因为「加载更多」影响了「刷新」,导致换一换时闪烁.
- 添加 /index.html 路径支持

## v0.10.8 2023-05-12

- revert to v0.10.6. untaged.

## v0.10.7 2023-05-12

- af7e677 settings: add more to help section
- e36b3ed feat: RecGrid loadMore 优化, 至少换行 -> 加载完 trigger scroll check

## v0.10.6 2023-05-04

- fix: 非普通视频 badge
- fix: 非内测主页 + 纯推荐模式, 移除分区按钮, 去顶部按钮总是显示.

## v0.10.5 2023-04-21

- ceab046 chore: use getColumnCount
- a522d74 feat: update grid css when width >= 2200px
- 5884d45 chore: clean up

## v0.10.4 2023-04-20

- feat: RecGrid 去重
- feat: RecGrid / SectionRecommend 使用倍数优化初始请求, 大基数过滤. (so 不要关闭 parallelRequest)

## v0.10.3 2023-04-17

- 移除分区按钮
- bangumi badge 对齐
- 更正 bangumi 追剧人数图标
- 加载速度优化

## v0.10.2 2023-04-17

- feat: 添加视频过滤器: 当前支持按播放量 & 视频时长过滤

## v0.10.1 2023-04-16

- feat: 添加鼠标悬浮自动预览: 默认关闭, 需要在设置中开启

## v0.10.0 2023-03-29

- 添加自动预览, 自动预览间隔设置等.

## v0.9.2 2023-03-28

- 添加并行请求设置, 缓解推荐重复问题

## v0.9.1 2023-03-24

- 引入 antd, 体积大了一倍 160+ KB -> 300+ KB, 但可以接受, 主要用在 ModalSettings

## v0.9.0 2023-03-23

- 添加更多快捷键支持: 方向键+回车选择不喜欢理由, `s` 键切换稍候再看
- 修复弹框直接 `esc` 键的影响, 如设置弹框 esc 关闭键会清除视频列表的选中状态.

## v0.8.3 2023-02-27

- fix: fix BaseModal lock body scroll in firefox, close #20

## v0.8.2 2023-02-15

- feat: hide ModalFeed in pureRecommend mode
- fix: fix 内测模式 react node insert point

## v0.8.1 2023-02-13

- 修复搜索框回车被识别成打开推荐视频的问题
- 设置弹框调整

## v0.8.0 2023-01-10

支持使用 App 或者 PC 接口

## v0.7.0 2022-12-14

老接口挂了, 完全不可用状态, 换上了 PC 首页推荐接口

- 不需要 access_key 了
- 标记不喜欢功能没了, 新接口下做不了
- 和首页自带推荐一样, 使用 BVID
- 和首页自带推荐不一样, 自带推荐有视频预览 / 弹幕预览, 本项目还是鼠标滑动查看快照图片.
- 首页自带推荐的接口, 貌似不会给你推荐番剧 (没有看见数据, 所以没有兼容)
- 老代码只注释了, 所以有点乱, 先用着吧~~~

## v0.6.6 2022-12-09

- 119b005 chore: add getRecommendParallelRequest option
- 741483a chore: ncu-safe
- 7605eb7 chore: rename config -> settings
- a67f1f8 chore: tryAction do not wait for first 200ms

## v0.6.5 2022-12-04

- feat: 在所有模式下,尝试移除 adblock-tips
- feat: remove gray

## v0.6.4 2022-11-29

- fix: 纯推荐模式下, 移除首页顶部 .adblock-tips 条

## v0.6.3 2022-11-25

- chore: 文案更新

## v0.6.2 2022-11-25

- 242e1ea fix: 已经是标记为不喜欢的视频, 不再响应删除键.
- 59425fd feat: 标记不喜欢, 可以使用键盘完成全流程. 删除键打开选择理由弹框, 数字键选择, esc 关闭.
- 514fd88 fix: 在纯分享模式下更舒服的使用方向键.
- 0a80375 feat: 窄屏模式重命名 -> 居中模式

## v0.6.1 2022-11-22

- 350ea14 feat: add backspace & esc key listener
- fd7ce55 chore: add more icons
- a579334 feat: more consitant modal style
- 43bca35 feat: refactor Modal styles
- 69f7667 chore: update deps
- d17db21 chore: toast min width
- 0882b04 feat: add more error report

## v0.6.0 2022-11-19

- feat: 设置面板
- feat: 纯推荐模式, 侵入极强.

## v0.5.2 2022-11-18

- c472bb5 feat: add turbo
- 7a361d3 feat: add retry to getRecommend when 鉴权失败
- 70d09ef chore: simplify vite config

## v0.5.1 2022-11-12

- feat: add dislike 界面 icon, 使用 icon-park 的图标

## v0.5.0 2022-11-02

- chore: auth timeout 固定 10s
- feat: 支持 bilibili 内测首页
- chore: update deps

## v0.4.4 2022-09-21

- 修复由于 getRecommend 参数一致导致的请求排队的情况. optimize for #9

## v0.4.3 2022-08-18

- 修复移动到视频卡片, 停留, 视频预览显示不正确的问题. ([没有进度条, 预览显示不正确](https://github.com/magicdawn/bilibili-app-recommend/issues/5#issuecomment-1216453427))

## v0.4.2 2022-08-13

- 去除番剧时长 `00:00` 显示
- 升级依赖, 升级 vite / vite-plugin-monkey

## v0.4.1 2022-07-28

- chore: back to @match, TamperMonkey @match 需要加 `?*` 即可

## v0.4.0 2022-07-28

- chore: add @include block for TamperMonkey bad support for @match

## v0.3.7 2022-07-12

- chore: 防止 onGetAuth 多次触发

## v0.3.6 2022-07-08

- fix: access_key timeout 默认 5s -> 10s, 并可以通过脚本设置 `authTimeout` 项调整, 单位秒, 可设置成 20 即为 20 秒

## v0.3.5 2022-07-04

- fix: 修复只使用向下箭头, 因为下标溢出, 向下无法加载更多的问题

## v0.3.4 2022-06-30

- 5442ddd - chore: fix eslint
- c489c2e - fix: 修复有些情况无法获取 json 的情况
- 1dca2b0 - chore: setup git hook & eslint
- 2a223c9 - chore: fix lodash => lodash-es
- 5e08c5d - feat: use @match only

## v0.3.3 2022-06-14

- chore: 样式调整
- feat: 添加 "自动查看更多" 设置

## v0.3.2 2022-06-08

- fix: 修复 Bilibili-Evoled 的深色模式切换时(日落自动切换 / 电脑经历睡眠后亮屏自动切换), 全屏弹框的样式异常的问题

## v0.3.1 2022-06-06

- fix: 修复使用向下箭头导致滚动抖动的问题.
- optimize: 优化 VideoCard, 优化初始加载时 / 刷新时 线框图的显示. (之前首页第一次推荐接口成功之前显示为空白)

## v0.3.0 2022-06-06

- optimize: 方向键使用体验优化, 上下方向键行为实现为"真" 上下移动
- optimize: 键盘 & 鼠标同时滚动时, 如果键盘方向键选中, 然后鼠标滚动, 如果选中的视频卡片离开屏幕太远 (超过一屏算太远),
  再继续用方向键, 会认为之前的选中无效(等同于使用了一次 Esc), 然后选中屏幕可以完全看见的第一个卡片

## v0.2.2 2022-06-06

- optimize: 使用 `crypto.randomUUID` 解决因推荐重复 + 使用视频 id 作为列表 key 导致的 react duplicate key, 导致的卡片状态异常的情况
- optimize: 使用 `React.memo(VideoCard)`

## v0.2.1 2022-06-05

- fix: 全屏信息流, 刷新之后清除选中状态, 否则在快捷键下行为显得很奇怪
- fix: 弹框开启后锁定 body 滚动逻辑, 之前的实现在多个弹框 show 之后, 上层弹框关闭之后 body 依然可以滚动.
  例如全屏推荐里打开不喜欢弹框, 再关闭不喜欢, 外层就可以滚动了. 这次修复了这个行为.
- fix: 快捷键, 只有单按 `r` 的时候刷新, 防止 CMD+R 刷新网页时触发 "换一换"

## v0.2.0 2022-06-04

- feat: 全屏信息流支持窄屏模式, 不用在宽屏上扭脖子了
- feat: 全屏信息流支持快捷键, 方向键 + enter 打开视频

## v0.1.1 2022-05-28

- feat: 使用 vite, 支持 HMR, 比较方便
- chore: 样式优化

## v0.1.0 2022-05-28

- feat: 添加 access_key [使用说明](https://github.com/indefined/UserScripts/tree/master/bilibiliHome#%E6%8E%88%E6%9D%83%E8%AF%B4%E6%98%8E), 感谢原作者提供的文档
- feat: 未授权状态, 不显示 "提交不喜欢" 入口

## v0.0.9 2022-05-28

- feat: 使用 valtio 管理 access_key 状态
- feat: 实现提交不喜欢 / 撤销不喜欢, 简单实现了下 "不喜欢", 状态下的 UI
- fix: 视频卡片, border 问题, 修改为预览时, 左上右上有圆角, 左下右下跟进度条一致, 无圆角

## v0.0.8 2022-05-22

- fix: @require script 使用 unpkg, jsdelivr 在大陆被屏蔽
- fix: 推荐列表去重, 重复的时候出现 duplicate key, 导致空白

## v0.0.7 2022-05-08

- feat: 优化视频卡片 fetch video data 逻辑
- fix: 收缩 init 范围到首页

## v0.0.6 2022-05-08

- fix: 修复正常白色模式下模态框样式问题
- feat: 使用 skeleton
- feat: 增加 access_key 管理: (重新获取 & 删除)
- feat: 视频预览使用二分查找优化 findIndex

## v0.0.5

- 清理 v0.0.4 默认打开模态框的代码

## v0.0.4 2022-04-21

- impl 预览进度条
- impl 添加/移除「稍后再看」

## v0.0.3 2022-04-19

- 去除 bootstrap, bootstrap 全局 css `.row` 影响了 bilibili-envoled 插件的显示, 这种全局 css 不是很好

## v0.0.2 2022-04-18

- Modal 关闭按钮, 改为纯文字
- Modal 增加 bilibili 红 border, 因为在深色模式下看不清
- 完善 @meta block
- 不支持弹幕, 去掉 dm 接口调用
- 优化 externals, 减小打包体积

## v0.0.1 2022-04-17

- first release, untaged
