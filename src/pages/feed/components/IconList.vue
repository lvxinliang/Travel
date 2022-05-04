<template>
  <div class="icon-list-main-div">
    <div class="top-logo">
      <img :src="img.logo"/>
    </div>
    <div class="phone">
      <img :src="img.page1"/>
      <div class="icons">
        <div class="icon-div" v-for="item in page1Date" :key="item.id">
          <img :src="item.url"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../../assets/images/logo.png'
import page1 from '../../../assets/images/page1.png'
import axios from 'axios'

export default {
  name: 'IconList',
  data () {
    return {
      img: {
        logo: logo,
        page1
      },
      page1Date: null
    }
  },
  mounted () {
    axios.get('/static/json/page1.json')
      .then(res => {
        this.page1Date = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="stylus" scoped>
.icon-list-main-div
  height 5.5rem
  width 100%
  position relative

  .top-logo
    img
      margin-top .3rem
      height 1.4rem
      width: 100%

  .phone
    margin-top .3rem

    img
      position absolute
      width 100%
      height 3.5rem

    .icons
      position absolute
      width 100%
      height 3.5rem
      margin-left 10%

      .icon-div
        position relative
        width 16%
        height 1.8rem
        margin-top 1.5rem
        margin-left 3%
        float left

        img
          position absolute
          width 100%
          height 100%
</style>
