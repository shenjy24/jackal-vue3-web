# Jackal Vue3 Web

用户侧 Vue3 前端基础工程，适用于 PC 与移动端响应式 C 端业务。

## 技术栈

- Vue 3 / Vite / TypeScript
- Vue Router（history 模式）
- Pinia
- Axios
- Naive UI
- vue-i18n
- Sass / CSS Variables

## 环境要求

- Node.js：建议使用当前 LTS 版本
- 包管理器：npm

## 本地开发

```bash
npm install
npm run dev
```

常用脚本：

```bash
npm run dev              # 本地环境，使用 .env.localdev
npm run dev:development  # 开发环境，使用 .env.development
npm run build            # 生产构建
npm run build:dev        # 开发环境构建
npm run preview          # 预览构建产物
npm run format           # 格式化代码
```

## 环境配置

环境文件：

- `.env.localdev`：本地环境
- `.env.development`：开发环境
- `.env.production`：生产环境

常用变量：

```txt
VITE_APP_TITLE=Jackal 用户端
VITE_APP_PORT=5173
VITE_API_BASE_URL=/api
VITE_API_PROXY_TARGET=
VITE_API_TIMEOUT=15000
VITE_DEFAULT_LOCALE=zh-CN
```

## 目录说明

```txt
src/
  api/        接口请求与 HTTP 封装
  config/     应用配置
  hooks/      组合式函数
  layouts/    页面布局
  locales/    国际化文案
  router/     路由配置与导航守卫
  stores/     Pinia 状态
  styles/     全局样式、主题、响应式样式
  types/      全局类型
  utils/      通用工具函数
  views/      页面视图
```

## 接口约定

请求层位于 `src/api/http.ts`，默认配置如下：

- `baseURL` 使用 `VITE_API_BASE_URL`
- `timeout` 使用 `VITE_API_TIMEOUT`
- `withCredentials` 为 `true`
- 登录态由服务端通过 HttpOnly Cookie 维护，前端不在 `localStorage` 中保存 token

后端响应结构约定：

```ts
interface ApiResponse<T> {
  code: number | string
  data: T
  message?: string
}
```

当前成功码为 `2000`。业务接口建议在 `src/api/` 下按模块维护，并通过 `src/api/index.ts` 统一导出。

## 新增功能步骤

1. 新增页面：在 `src/views/功能名/` 下创建页面组件，目录名使用 kebab-case。
2. 注册路由：在 `src/router/index.ts` 中新增路由；需要主布局时挂到 `DefaultLayout`，独立页面挂到 `EmptyLayout`。
3. 新增接口：在 `src/api/` 下创建或扩展业务模块，定义请求参数、响应类型和请求方法。
4. 新增状态：有跨页面共享数据时，在 `src/stores/` 下新增或扩展 Pinia store。
5. 新增文案：涉及展示文案时，同步维护 `src/locales/messages/zh-CN.ts` 与 `src/locales/messages/en-US.ts`。
6. 新增样式：页面私有样式写在组件内；全局、主题、响应式样式分别维护在 `src/styles/` 对应文件中。
7. 注册组件：新增 Naive UI 全局组件时，在 `src/main.ts` 的 `create({ components: [] })` 中补充注册。
8. 验证功能：运行 `npm run build`，确认类型检查和生产构建通过。

## 部署说明

项目使用 Vue Router history 模式。生产环境需要将无法命中的前端路由回退到 `index.html`。

Nginx 示例：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
