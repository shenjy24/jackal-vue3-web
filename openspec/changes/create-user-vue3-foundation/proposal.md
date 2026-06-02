## Why

当前项目需要先建立一套用户侧 Vue3 基础框架，用于承载后续不同 C 端业务页面和功能扩展。先固化框架逻辑、工程边界和基础能力，可以避免后续业务开发时重复搭建登录、请求、主题、国际化、响应式等通用能力。

## What Changes

- 新建用户侧 Vue3 基础框架，采用 Vue 3、Vite、TypeScript、Vue Router、Pinia、Axios。
- 建立按技术类型划分的目录结构，覆盖 `api`、`assets`、`components`、`config`、`hooks`、`layouts`、`locales`、`router`、`stores`、`styles`、`types`、`utils`、`views`。
- 提供账号密码登录示例流程，登录态通过 HttpOnly Cookie 由浏览器自动携带，前端不保存 token。
- 封装统一 Axios 请求层，默认以 POST 方式调用业务接口，并开启跨域凭证携带。
- 提供本地、开发、生产环境配置。
- 集成国际化基础能力，默认支持中文和英文资源组织。
- 集成亮/暗主题切换能力，基于 CSS Variables 和应用状态管理实现。
- 建立 PC + 移动端响应式基础样式和布局能力。
- 引入轻量格式化配置，避免复杂工程约束。
- 推荐使用 Naive UI 作为 PC + 移动端响应式场景下的 C 端基础组件库。

## Capabilities

### New Capabilities

- `user-vue3-foundation`: 定义用户侧 Vue3 基础框架的工程结构、运行配置、路由状态、请求封装、主题、国际化、响应式和登录示例能力。

### Modified Capabilities

无。

## Impact

- 影响前端工程初始化、源码目录结构和基础依赖选型。
- 影响请求层约定：接口默认使用 POST，登录态依赖 HttpOnly Cookie，Axios 需要启用 `withCredentials`。
- 影响应用基础体验：需要支持国际化、亮/暗主题和 PC + 移动端响应式。
- 暂不引入 SSR/SEO、复杂权限控制、refresh token、微前端或重型提交规范。
