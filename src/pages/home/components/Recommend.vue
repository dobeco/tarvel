<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>

      <router-link tag="li"
                   class="item border-bottom"
                   v-for="item of list"
                   :key="item.id"
                   :to="'/detail/'+ item.id"
      >
        <img class="item-img"
             :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>

      </router-link>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      list: Array
    },
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixins.scss';

  .recommend {
    .title {
      margin-top: .2rem;
      line-height: .8rem;
      background: #eee;
      text-indent: .2rem;
    }
    .item {
      display: flex;
      height: 1.9rem;
      overflow: hidden;
      .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
      }
      .item-info {
        flex: 1;
        padding: .1rem;
        min-width: 0;
        .item-title {
          line-height: .54rem;
          font-size: .32rem;

        }
        .item-desc {
          line-height: .4rem;
          color: #ccc;
          @include ellipsis;
        }
        .item-btn {
          line-height: .44rem;
          margin-top: .16rem;
          background: #ff9300;
          padding: 0 .2rem;
          border-radius: 0.06rem;
          color: #fff;

        }
      }
    }
  }


</style>
