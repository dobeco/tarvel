<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper" >
      <!-- slides -->

      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipe-img" :src="item.imgUrl" :alt="item.alt" style="opacity: 1;">
      </swiper-slide>


      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay:3000,
          speed:1400
        },
      }
    },
    computed: {
      showSwiper () {
        return this.list.length

      }
    }
  }
</script>
<style>
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
  }
</style>
<style lang="scss" scoped>
  /*.wrapper >>> .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff !important;
  }*/
  .wrapper {
    width: 100%;
    .swipe-img {
      width: 100%;
    }
  }


</style>
