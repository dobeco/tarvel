<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: "Home",
    data() {
      return {
        lastCity:'e',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    computed: {
      ...mapState(['city'])
    },

    methods: {
      /*getHomeInfo(){
        axios.get('/api/index.json').then((res)=> {
          res=res.data;
          if(res.ret&&res.data){
            const data = res.data;
            this.city=data.city
          }
          console.log( res);
        }).catch((error)=>{
          console.log(error)
        })
      }*/
      getHomeInfo() {
        axios.get('https://easy-mock.com/mock/5b9f9915ddc3bc766bad77fc/travel/home?city='+this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data;
        console.log(res);
        if (res.ret && res.data) {
          const data = res.data;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      }
    },
    mounted() {
      this.lastCity=this.city;
      this.getHomeInfo()
    },
    activated () {
      if(this.lastCity !== this.city) {
        this.getHomeInfo()
      }

    }


  }
</script>

<style scoped lang="scss">


</style>
