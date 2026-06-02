## Context

本变更用于创建用户侧 Vue3 基础框架，服务于后续多种 C 端业务的快速接入。当前项目尚未形成用户侧前端工程的统一骨架，因此需要先明确技术栈、目录边界、登录态处理、请求约定、主题、国际化、环境配置和响应式策略。

约束条件：

- 使用 Vue 3 技术栈，采用 TypeScript。
- 应用为独立前端项目，长期维护，不考虑微前端拆分。
- 路由使用 history 模式，部署环境需要支持前端路由回退。
- 登录态通过 HttpOnly Cookie 维护，前端不保存 token，不实现 refresh token。
- 接口统一按 POST 方式封装，Axios 需要携带 Cookie 凭证。
- 暂不实现复杂权限控制、SSR/SEO 和重型工程规范。

## Goals / Non-Goals

**Goals:**

- 建立轻量可扩展的 Vue3 用户侧工程骨架。
- 提供清晰的技术类型目录结构，便于后续业务模块接入。
- 提供统一请求封装、账号密码登录示例、用户状态管理和基础路由。
- 提供本地、开发、生产环境配置。
- 提供国际化、亮/暗主题和 PC + 移动端响应式基础能力。
- 提供基础格式化配置，保持代码风格一致。

**Non-Goals:**

- 不实现具体业务页面或复杂业务流程。
- 不实现 SSR/SEO。
- 不实现按钮级、接口级或多角色权限控制。
- 不实现 refresh token、localStorage token 存储或复杂会话续期。
- 不引入微前端、Monorepo 或重型提交规范。

## Decisions

### 技术栈

采用 Vue 3、Vite、TypeScript、Vue Router、Pinia、Axios 作为基础栈。

原因：

- Vue 3 与 Vite 适合轻量快速启动，也便于后续按需扩展。
- TypeScript 能提高长期维护时的接口、状态和组件约束能力。
- Pinia 是 Vue 3 生态内更自然的状态管理方案。
- Axios 适合统一封装 POST 请求、错误处理和凭证配置。

备选方案：

- Nuxt：更适合 SSR/SEO 场景，本项目暂不需要。
- Vuex：在 Vue 3 新项目中维护成本高于 Pinia。

### UI 组件库

推荐使用 Naive UI 作为基础组件库，并保持按需使用。

原因：

- 本项目需要 PC + 移动端响应式，而不是纯移动端 H5。
- Naive UI 相比 Element Plus 更轻、更适合 C 端视觉延展。
- 主题定制能力较好，便于和亮/暗主题系统结合。

备选方案：

- Vant：适合纯移动端 H5，但 PC 适配不足。
- Element Plus：成熟稳定，但默认气质更偏后台管理系统。

### 目录结构

采用技术类型组织：

```txt
src/
  api/
  assets/
  components/
  config/
  hooks/
  layouts/
  locales/
  router/
  stores/
  styles/
  types/
  utils/
  views/
```

原因：

- 当前框架强调基础能力，不绑定具体业务域。
- 技术类型结构更适合作为起步模板，后续业务复杂后仍可在 `views`、`api`、`stores` 内按业务细分。

### 请求与登录态

Axios 实例统一开启 `withCredentials`，请求方法默认走 POST。账号密码登录示例只负责提交凭证并拉取用户信息，浏览器通过 HttpOnly Cookie 自动携带会话。

登录数据流：

```txt
Login View
  -> user store login()
    -> api/auth.login()
      -> POST /login withCredentials
    -> api/auth.profile()
      -> POST /profile withCredentials
    -> store user profile
```

前端不读取、不保存 token。登出时调用服务端登出接口并清理本地用户状态。

### 路由

Vue Router 使用 history 模式。首版提供首页、登录页、404 页和基础布局。暂不做权限系统，只做可选的登录态检查扩展点。

部署要求：

- 生产环境网关或静态服务器需要将未知路径回退到 `index.html`。

### 国际化

国际化资源放在 `locales`，默认提供 `zh-CN` 和 `en-US` 结构。语言选择保存在应用状态和本地偏好中，页面文案通过 i18n key 获取。

### 主题

主题采用 CSS Variables + Pinia 状态管理。根节点根据当前主题设置 `data-theme="light"` 或 `data-theme="dark"`，样式变量集中维护在 `styles`。

### 响应式

采用 CSS 媒体查询、流式布局和必要的组合式函数支持 PC + 移动端。基础布局应避免固定宽度阻塞移动端展示。

## Risks / Trade-offs

- [HttpOnly Cookie 依赖后端 CORS 和 SameSite 配置] → 在环境配置和请求封装中明确 `withCredentials`，并在实现任务中补充联调说明。
- [history 模式刷新 404] → 在部署说明中要求服务端 fallback 到 `index.html`。
- [Naive UI 移动端组件体验不如纯 H5 库] → 首版只作为基础组件库，复杂移动端交互可后续按业务补充组件。
- [技术类型目录在业务膨胀后可能变散] → 后续业务复杂时，可在各技术目录内按业务域二级划分。
- [暂不做权限控制可能影响后续受保护页面] → 保留路由守卫扩展点，但不在首版实现角色权限。

## Migration Plan

1. 创建或调整 Vue3 工程基础依赖与配置。
2. 建立 `src` 目录结构和基础入口。
3. 接入路由、状态、请求、主题、国际化和环境配置。
4. 添加登录、首页、404 示例页面验证基础流程。
5. 执行格式化和构建验证。

回滚策略：本变更为新框架初始化，不涉及线上数据迁移；如实现失败，可回退本次新增的基础框架文件和依赖变更。

## Open Questions

暂无。后续具体业务接入时，再根据业务域补充页面结构、接口模块和更细粒度的交互规范。
