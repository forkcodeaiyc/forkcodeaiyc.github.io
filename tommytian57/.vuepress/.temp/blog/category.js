export const categoryMap = {"category":{"/":{"path":"/category/","map":{"About Tommy":{"path":"/category/about-tommy/","keys":["v-68d6fa0a"]}}}},"tag":{"/":{"path":"/tag/","map":{"Biography":{"path":"/tag/biography/","keys":["v-68d6fa0a"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
