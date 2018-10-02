<template>
  <div class="list" ref="warpper">
    <div>
      <div class="area">
        <div class="title border-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.currentCity}}

              <!--{{this.$store.state.city}}-->
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area"
           v-for="(item ,key) of cities"
           :key="key"
           :ref="key"
      >

        <div class="title border-bottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
  import Bsroll from 'better-scroll'
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: "CityList",
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    computed : {
      ...mapState({
        currentCity:'city'
      })
    },
    methods:{
      handleCityClick(city){
      //  this.$store.commit('changeCity',city);  //等于mapMutations api
        this.changeCity(city);
        this.$router.push('/')
      },
      ...mapMutations (['changeCity'])
    },
    watch: {
      letter () {
        if(this.letter){
          const element= this.$refs[this.letter][0];
          this.scroll.scrollToElement(element)
        }
      }

    },
    mounted() {
      this.scroll = new Bsroll(this.$refs.warpper)
    }

  }
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/varibles.scss';

  .border-bottom {
    &:before,
    &:after {
      content: "";
      border-color: #ccc;
    }
  }

  .list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .title {
    line-height: .54rem;
    padding-left: .2rem;
    background: #eee;
    color: #666;
    font-size: .26rem
  }

  .button-list {
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
    .button-wrapper {
      float: left;
      width: 33.333%;
      .button {
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: .78rem;
      padding-left: .2rem;
    }
  }


</style>
