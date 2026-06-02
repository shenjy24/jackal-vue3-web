## ADDED Requirements

### Requirement: 工程技术栈

系统 SHALL 使用 Vue 3、Vite、TypeScript、Vue Router、Pinia 和 Axios 作为用户侧基础框架的核心技术栈。

#### Scenario: 初始化基础依赖

- **WHEN** 开发者查看项目依赖和入口配置
- **THEN** 系统包含 Vue 3、Vite、TypeScript、Vue Router、Pinia 和 Axios 的可运行配置

### Requirement: 技术类型目录结构

系统 SHALL 按技术类型组织源码目录，并提供 `api`、`assets`、`components`、`config`、`hooks`、`layouts`、`locales`、`router`、`stores`、`styles`、`types`、`utils`、`views` 目录。

#### Scenario: 查看源码结构

- **WHEN** 开发者打开 `src` 目录
- **THEN** 系统展示按技术类型划分的基础目录结构

### Requirement: History 路由模式

系统 SHALL 使用 Vue Router history 模式，并提供首页、登录页和 404 页面路由。

#### Scenario: 访问基础页面

- **WHEN** 用户访问首页、登录页或不存在的路径
- **THEN** 系统分别展示首页、登录页或 404 页面

### Requirement: HttpOnly Cookie 登录示例

系统 SHALL 提供账号密码登录示例，并通过 HttpOnly Cookie 维护登录态，前端 MUST NOT 将 token 保存到 localStorage。

#### Scenario: 用户登录

- **WHEN** 用户在登录页提交账号和密码
- **THEN** 系统通过 POST 请求提交登录信息，并由浏览器接收服务端设置的 HttpOnly Cookie

#### Scenario: 保存登录状态

- **WHEN** 登录接口返回成功
- **THEN** 系统只保存用户信息和登录状态，不保存 token 到 localStorage

### Requirement: 统一 POST 请求封装

系统 SHALL 提供统一 Axios 实例，默认启用 `withCredentials`，并提供基于 POST 的请求封装。

#### Scenario: 发起业务请求

- **WHEN** 业务模块调用统一请求方法
- **THEN** 系统使用 POST 方法发送请求，并携带浏览器 Cookie 凭证

### Requirement: 环境配置

系统 SHALL 支持本地、开发、生产三类环境配置，并允许读取不同环境下的 API 基础地址和应用配置。

#### Scenario: 切换运行环境

- **WHEN** 开发者使用不同环境命令构建或运行应用
- **THEN** 系统加载对应环境的配置项

### Requirement: 国际化基础能力

系统 SHALL 提供国际化基础能力，并至少组织中文和英文语言资源。

#### Scenario: 切换语言

- **WHEN** 用户或应用状态切换当前语言
- **THEN** 页面文案使用对应语言资源渲染

### Requirement: 亮暗主题切换

系统 SHALL 支持亮色和暗色主题切换，并通过 CSS Variables 统一控制主题色、背景色和文本色。

#### Scenario: 切换主题

- **WHEN** 用户切换亮色或暗色主题
- **THEN** 系统更新根节点主题标识，并应用对应 CSS 变量

### Requirement: PC 与移动端响应式

系统 SHALL 提供 PC + 移动端响应式基础布局和样式能力。

#### Scenario: 改变视口宽度

- **WHEN** 用户在桌面端或移动端尺寸访问应用
- **THEN** 页面布局在对应视口下保持可读、可操作且不出现主要内容横向溢出

### Requirement: 轻量格式化配置

系统 SHALL 提供基础格式化配置，以统一代码风格，但 MUST NOT 引入复杂提交规范作为首版必需流程。

#### Scenario: 格式化代码

- **WHEN** 开发者执行格式化命令
- **THEN** 系统按统一格式化规则处理项目源码
