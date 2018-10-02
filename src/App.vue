<template>
  <div id="app">
    <!-- keep-alive缓存
    exclude表示不缓存的组件

    -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

  /*组件理的name的用途
  * 用于递归组件
  * 想对某个页面取消缓存的时候
  * 浏览器vue调试工具显示的组件名
  * */
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
</style>
