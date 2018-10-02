<template>
  <div class="header">
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <i class="iconfont icon-back"></i>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle"
    >
      <router-link to="/">
        <div class="header-back">
          <i class="iconfont icon-back"></i>
        </div>
      </router-link>
      景点详情
    </div>


  </div>

</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop;
        if (top > 60) {
          opacity = opacity > 1 ? opacity :1 ;
          let opacity = top / 140;
          this.opacityStyle = {
            opacity

          };

          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/varibles.scss';

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .header-abs {
      position: absolute;
      left: .2rem;
      top: .2rem;
      width: .8rem;
      height: .8rem;
      line-height: .8rem;
      border-radius: .4rem;
      text-align: center;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      .icon-back {
        color: #fff;
        font-size: .4rem;
      }
    }
    .header-fixed {
      z-index: 99;
      height: $headerHeight;
      line-height: $headerHeight;
      text-align: center;
      color: #fff;
      background: $bgColor;
      font-size: .32rem;
      .header-back {
        position: absolute;
        top: 0;
        left: 0;
        width: .64rem;
        text-align: center;
        .icon-back {
          font-size: .4rem;
          color: #fff;
        }
      }
    }
  }


</style>
