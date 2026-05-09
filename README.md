# 犹为君

一个简单、无任何修饰的官网。  

让我们生活的世界充满诗意。

## 技术栈

- **Astro** - 静态站点生成器
- **React** - UI 组件库
- **TypeScript** - 类型安全

## 开始使用

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
├── public/           # 静态资源
├── src/
│   ├── components/   # React 组件
│   ├── layouts/      # Astro 布局
│   └── pages/        # 页面
├── astro.config.mjs  # Astro 配置
└── package.json
```

## 扩展 Next.js

如需添加 API 路由或服务端功能，可以创建一个 Next.js 应用：

```bash
npx create-next-app@latest api-server
```

然后在 Next.js 项目中调用 Astro 构建的静态页面。
