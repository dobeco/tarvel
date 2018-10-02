<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    >
    </city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>

  </div>


</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'

  export default {
    name: "City",
    data(){
      return {
        cities:{},
        hotCities:[],
        letter:''
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    methods: {
      getCityInfo() {
        axios.get('https://easy-mock.com/mock/5b9f9915ddc3bc766bad77fc/travel/city')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        res=res.data;
        if(res.ret&&res.data){
          const data =res.data;
          this.cities=data.cities;
          this.hotCities=data.hotCities
        }
      },
      handleLetterChange(letter){
        this.letter=letter;
      }
    },
    mounted() {
      this.getCityInfo()
    }
  }
</script>

<style lang="scss" scoped>


</style>
