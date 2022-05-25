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
        this.page1Data = JSON.parse('[\n' +
          '  {\n' +
          '    "url": "/static/icons/1.png",\n' +
          '    "id": "1"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/2.png",\n' +
          '    "id": "2"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/3.png",\n' +
          '    "id": "3"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/4.png",\n' +
          '    "id": "4"\n' +
          '  }\n' +
          ']')
      })
    axios.get('/static/json/page2.json')
      .then(res => {
        this.page2Data = res.data
      })
      .catch(err => {
        console.log(err)
        this.page2Data = JSON.parse('[\n' +
          '  {\n' +
          '    "url": "/static/icons/5.png",\n' +
          '    "id": "5"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/6.png",\n' +
          '    "id": "6"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/7.png",\n' +
          '    "id": "7"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/8.png",\n' +
          '    "id": "8"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/9.png",\n' +
          '    "id": "9"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/10.png",\n' +
          '    "id": "10"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/11.png",\n' +
          '    "id": "11"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/12.png",\n' +
          '    "id": "12"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/13.png",\n' +
          '    "id": "13"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/14.png",\n' +
          '    "id": "14"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/15.png",\n' +
          '    "id": "15"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/16.png",\n' +
          '    "id": "16"\n' +
          '  }\n' +
          ']\n')
      })
    axios.get('/static/json/page3.json')
      .then(res => {
        this.page3Data = res.data
      })
      .catch(err => {
        console.log(err)
        this.page3Data = JSON.parse('[\n' +
          '  {\n' +
          '    "url": "/static/icons/17.png",\n' +
          '    "id": "17"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/18.png",\n' +
          '    "id": "18"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/19.png",\n' +
          '    "id": "19"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/20.png",\n' +
          '    "id": "20"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/21.png",\n' +
          '    "id": "21"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/22.png",\n' +
          '    "id": "22"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/23.png",\n' +
          '    "id": "23"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/24.png",\n' +
          '    "id": "24"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/25.png",\n' +
          '    "id": "25"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/26.png",\n' +
          '    "id": "26"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/27.png",\n' +
          '    "id": "27"\n' +
          '  },\n' +
          '  {\n' +
          '    "url": "/static/icons/28.png",\n' +
          '    "id": "28"\n' +
          '  }\n' +
          ']\n')
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
