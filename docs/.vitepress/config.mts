import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Geeker Boy's Blog",
  base: "/blog-press",
  description: "一个基于VitePress搭建的个人博客网站.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "全部文章", link: "/articles" },
      { text: "关于我", link: "/about-me" },
    ],
    sidebar: [
      {
        text: "全部文章",
        link: "/articles",
        collapsed: true,
        items: [{ text: "第一篇文章", link: "/articles/first-post" }],
      },
      {
        text: "关于我",
        link: "/about-me",
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Oyon5619" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright @YONSEN",
    },
  },
});
