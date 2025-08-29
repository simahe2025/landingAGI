# LandingAGI 电脑快修（佛山禅城区·季华园）

静态单页网站，可直接部署到 **GitHub Pages** 或 **Netlify**。  
- 图片全部使用 Unsplash 外链，并在 `<img>` 上加入 `onerror` 回退到本地 `assets/placeholder.jpg`，确保不会出现空白图。  
- 表单已接入 Netlify（`data-netlify="true"`），提交后跳转到 `/success.html`。

## 本地开发
直接双击打开 `index.html`。

## 部署到 GitHub Pages
1. 新建仓库，把所有文件推送到 `main` 分支根目录；
2. 在仓库 Settings → Pages → 选择 `Deploy from a branch`，分支 `main`，路径 `/ (root)`。

## 部署到 Netlify
直接拖放整个文件夹到 Netlify Drop，或绑定仓库一键部署。

## 替换为你的实拍图
把 `index.html` 里的外链 `src` 替换为你自己的 CDN 地址即可，保留 `onerror` 可以避免加载失败时出现空白。
