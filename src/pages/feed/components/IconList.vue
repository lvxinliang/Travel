<template>
  <div>
    <div v-show="pageNum == '1'" class="icon-list-main-div">
      <div class="top-logo">
        <img :src="img.logo"/>
      </div>
      <div class="phone">
        <img :src="img.page1"/>
        <div class="icons">
          <div class="icon-div" v-for="item in page1Data" :key="item.id" @click="iconClick(item)">
            <img :src="item.url"/>
          </div>
        </div>
      </div>
    </div>
    <div v-show="pageNum == '2'" class="icon-list-main-div page2">
      <div class="phone">
        <img :src="img.page2"/>
        <div class="icons">
          <div class="icon-div" v-for="(item) in page2Data" :key="item.id" @click="iconClick(item)">
            <img :src="item.url"/>
          </div>
        </div>
      </div>
    </div>
    <div v-show="pageNum == '3'" class="icon-list-main-div page2">
      <div class="phone">
        <img :src="img.page3"/>
        <div class="icons">
          <div class="icon-div" v-for="(item) in page3Data" :key="item.id" @click="iconClick(item)">
            <img :src="item.url"/>
          </div>
        </div>
      </div>
    </div>
    <div v-show="pageNum == '4'" class="icon-list-main-div page4">
      <img :src="img.page4"/>
    </div>
  </div>
</template>

<script>
import logo from '../../../assets/images/logo.png'
import page1 from '../../../assets/images/page1.png'
import page2 from '../../../assets/images/page2.png'
import page3 from '../../../assets/images/page3.png'
import page4 from '../../../assets/images/page4.png'
import axios from 'axios'

export default {
  props: ['pageNum'],
  name: 'IconList',
  data () {
    return {
      img: {
        logo: logo,
        page1,
        page2,
        page3,
        page4
      },
      page1Data: null,
      page2Data: null,
      page3Data: null
    }
  },
  methods: {
    iconClick (item) {
      console.log(item.id)
      this.$emit('iconClick', item)
    }
  },
  mounted () {
    axios.get('/static/json/page1.json')
      .then(res => {
        this.page1Data = res.data
      })
      .catch(err => {
        console.log(err)
      })
    axios.get('/static/json/page2.json')
      .then(res => {
        this.page2Data = res.data
      })
      .catch(err => {
        console.log(err)
      })
    axios.get('/static/json/page3.json')
      .then(res => {
        this.page3Data = res.data
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
      width 76%
      height 3.5rem
      margin-left 12%

      .icon-div
        position relative
        width 21%
        height 1.8rem
        margin-top 1.5rem
        margin-left 3%
        float left

        img
          position absolute
          width 100%
          height 100%

.page2
  .phone
    margin-top 0rem

    img
      position absolute
      width 100%
      height 100%

    .icons
      .icon-div
        position relative
        margin-top 0rem
        display inline-block

        img
          position absolute
          width 100%
          height 100%
.page4
  img
    margin-top .3rem
    width 100%
    height 50%
</style>
