<template>
  <div class="header border-bottom">
    城市选择
    <router-link to="/">
      <div class="header-back">
        <i class="iconfont icon-back"></i>
      </div>
    </router-link>
  </div>
</template>
<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/varibles.scss';
  /*1rem =html font-size:50px */
  .header{
    position: relative;
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: .32rem;
    .header-back{
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align:center;
      .icon-back{
        font-size: .4rem;
        color: #fff;
      }
    }
  }

</style>
