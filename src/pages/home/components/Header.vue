<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-back"></i>
    </div>

    <div class="header-input" @click="toCity">
      <i class="iconfont icon-search"></i>
      输入城市景点游玩主题
    </div>

    <router-link to="/City">
    <div class="header-right">
      {{this.city}}
      <!--{{this.$store.state.city}}-->
      <i class="iconfont icon-unfold"></i>
    </div>
    </router-link>

  </div>


</template>

<script>
  import { mapState} from 'vuex'

  export default {
    name: "HomeHeader",
    computed: {
      //mapState是指把vuex里面的数据映射到这个组件的计算属性里
      ...mapState(['city']),

    },
    methods: {
      toCity() {
        this.$router.push('./City')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/varibles.scss';

  .header {
    display: flex;
    background: $bgColor;
    line-height: $headerHeight;
    color: #fff;
    .header-left {
      width: 0.64rem;
      float: left;
      .icon-back {
        display: block;
        text-align: center;
        font-size: 20px;
      }
    }
    .header-input {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: 0.2rem;
      background: #fff;
      -webkit-border-radius: 0.1rem;
      -moz-border-radius: 0.1rem;
      border-radius: 0.1rem;
      color: #ccc;
    }
    .header-right {
      min-width: 1.04rem;
      padding: 0 .1rem;
      float: right;
      text-align: center;
      color: #fff;
    }
  }

</style>
