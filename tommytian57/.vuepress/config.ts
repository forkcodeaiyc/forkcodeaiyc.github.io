import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";



export default defineUserConfig({
  lang: "zh-CN",
  title: "Tommy",
  description: "亲爱的读者你们好，我叫Tommy，是美国纽约大学一年级融合媒体设计专业的一名学生，最近刚刚转到这个自己喜欢的专业，也相信自己在这个专业中一定会闯出属于自己的一片天地。最近一直在骑自行车减肥，也一直很热爱骑行运动，这也是为什么我的头像和背景都是自行车。",

  shouldPrefetch: false,

  base: "/",

  plugins: [
    // commentPlugin({
    //   pageSize: 10,
    //   copyright: false,
    // }),

    
    
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
          
        },
      },
    }),
  ],

  theme,
});
