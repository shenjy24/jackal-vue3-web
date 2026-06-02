## 1. 工程依赖与配置

- [x] 1.1 初始化或调整 Vue 3、Vite、TypeScript 基础配置，确保项目可运行。
- [x] 1.2 安装并配置 Vue Router、Pinia、Axios、Naive UI、国际化和 Sass/CSS 样式支持。
- [x] 1.3 配置本地、开发、生产环境变量文件，并统一读取 API 基础地址和应用配置。
- [x] 1.4 添加轻量 Prettier 格式化配置和格式化命令。

## 2. 源码目录与入口

- [x] 2.1 建立 `src/api`、`src/assets`、`src/components`、`src/config`、`src/hooks`、`src/layouts`、`src/locales`、`src/router`、`src/stores`、`src/styles`、`src/types`、`src/utils`、`src/views` 目录。
- [x] 2.2 配置应用入口，挂载 Router、Pinia、Naive UI 和国际化实例。
- [x] 2.3 建立基础全局样式入口，包含 reset、主题变量和响应式规则。

## 3. 请求与登录基础能力

- [x] 3.1 封装 Axios 实例，默认启用 `withCredentials`，并实现统一 POST 请求方法。
- [x] 3.2 建立认证接口模块，包含登录、登出、获取当前用户信息的示例方法。
- [x] 3.3 建立用户状态 store，保存用户信息和登录状态，不保存 token 到 localStorage。
- [x] 3.4 实现账号密码登录示例流程，登录成功后拉取用户信息并跳转首页。
- [x] 3.5 实现登出示例流程，调用登出接口后清理用户状态。

## 4. 路由、布局与页面

- [x] 4.1 配置 Vue Router history 模式。
- [x] 4.2 添加默认布局和空布局。
- [x] 4.3 添加首页、登录页和 404 示例页面。
- [x] 4.4 预留路由守卫扩展点，但不实现角色权限控制。

## 5. 国际化、主题与响应式

- [x] 5.1 建立 `zh-CN` 和 `en-US` 语言资源，并提供语言切换方法。
- [x] 5.2 建立亮色和暗色主题变量。
- [x] 5.3 实现主题 store 和 `useTheme` 组合式函数，切换根节点主题标识。
- [x] 5.4 实现基础响应式样式，确保 PC 和移动端视口下页面可读、可操作。

## 6. 验证与收尾

- [x] 6.1 执行格式化命令，确认源码风格统一。
- [x] 6.2 执行构建命令，确认 TypeScript、Vite 和依赖配置通过。
- [x] 6.3 手动验证首页、登录页、404 页面、语言切换、主题切换和响应式布局。
- [x] 6.4 补充部署说明，注明 history 模式需要服务端 fallback 到 `index.html`。
