<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg"
           alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <i class="iconfont icon-picfill">{{this.bannerImgs.length}}</i>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>


</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  import FadeAnimation from 'common/fade/FadeAnimation'

  export default {
    name: "DetailBanner",
    props: {
      sightName:String,
      bannerImg:String,
      bannerImgs:Array
    },
    data() {
      return {
        showGallary: false,

      }
    },
    components: {
      CommonGallary,
      FadeAnimation
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true
      },
      handleGallaryClose () {
        this.showGallary = false

      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img {
      width: 100%;
    }
    .banner-info {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      .banner-title {
        flex: 1;
        font-size: .32rem;
        padding: 0 .4rem;
      }
      .icon-picfill {
        height: .32rem;
        line-height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        font-size: .24rem;
        background: rgba(0, 0, 0, 0.6);
      }
    }
  }

</style>
