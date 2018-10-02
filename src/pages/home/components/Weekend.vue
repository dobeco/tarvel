<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-item"
          v-for="item of list"
          :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img"
               :src="item.imgUrl" alt="">
        </div>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>

      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      list:Array
    },
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixins.scss';
  .weekend {
    .title {
      line-height: .8rem;
      background: #eee;
      text-indent: .2rem;
    }
    .item {
      .item-img-wrapper {
        overflow: hidden;
        height: 0;
        padding-bottom:37.09% ;
        .item-img {
          width: 100%;
          height: auto;
        }
      }
      .item-info {
        padding: .1rem;
        .item-title {
          line-height: .54rem;
          font-size: .32rem;
          color:#212121 ;
        }
        .item-desc {
          line-height: .4rem;
          color: #616161;
          @include ellipsis;
        }
      }

    }
  }


</style>
