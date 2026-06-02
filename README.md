# Jackal Vue3 Web

用户侧 Vue3 基础框架，面向 PC + 移动端响应式 C 端业务。

## 技术栈

- Vue 3
- Vite
- TypeScript
- Vue Router history 模式
- Pinia
- Axios
- Naive UI
- vue-i18n
- Sass / CSS Variables

## 本地运行

```bash
npm install
npm run dev
```

## 环境配置

- `.env.localdev`：本地环境
- `.env.development`：开发环境
- `.env.production`：生产环境

常用变量：

```txt
VITE_APP_TITLE=Jackal 用户端
VITE_API_BASE_URL=/api
VITE_API_TIMEOUT=15000
VITE_DEFAULT_LOCALE=zh-CN
```

## 登录态约定

登录态由服务端通过 HttpOnly Cookie 维护。前端请求层默认启用 `withCredentials`，不在 localStorage 中保存 token。

## 部署说明

项目使用 Vue Router history 模式。生产环境需要将无法命中的前端路由回退到 `index.html`。

Nginx 示例：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
