import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "#",

  author: {
    name: "Tommy Tian",
    url: "#",
  },

  iconAssets: "iconfont",

  logo: "/felt.png",

  repo: "tommytian57/tommytian57.github.io",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "纽约大学大一在读，热爱摄影，设计，骑行，在学校拥有自己的自行车俱乐部，欢迎大家加入。",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    name: "Tommy",
    avatar: "/felt.png",
    description: "一个热爱生活的少年",
    intro: "/intro.html",
    
  },

  encrypt: {
    config: {
      // "/posts/biography.html": ["020507"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://comments.tommytian57.com/",
      // emoji: [
      //   'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
      //   'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
      //   'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
      //   'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
      //   'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
      //   'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji',
      // ],
    },

    mdEnhance: {
      tex: true,
      // enableAll: true,
      attrs: true,
      tabs: true,
      // vpre: true,
      codetabs: true,
      tasklist: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      align: true, // 自定义对齐
      footnote: true,
      // this is the default option, so you can use it directly
      container: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
