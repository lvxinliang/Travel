<template>
  <div class="background-div">
    <div class="main-div">
      <div v-bind:class="{'icon-move':itemShow}" v-show="itemShow">
        <img ref="iconSelect" src="/static/icons/1.png">
      </div>
      <div class="page-div">
        <div class="page-up-div" @click="pageDown">
          <img ref="pageDown" class="page" :src="img.pageDownOff"/>
        </div>
        <div class="page-up-div page-down-div">
          <img ref="pageUp" class="page" :src="img.pageUpOn" @click="pageUp"/>
        </div>
        <div class="div-clear"/>
      </div>
      <img class="icon-list-border" :src="img.iconListTop"/>
      <div class="icon-list">
        <IconList v-bind:page-num="pageNum" @iconClick="itemClick"/>
      </div>
      <img class="icon-list-border" :src="img.iconListBottom"/>
      <div class="select-list">
        <div class="select-list-left">
          <div>
            <img class="pig-img" :src="img.greenPig"/>
          </div>
        </div>
        <div class="select-list-right">
          <img class="pig-feed-over" :src="img.feedOver"/>
        </div>
        <div class="div-clear"/>
      </div>
      <div class="bottom-div">
        <span>*此设计内应用程序选取自《互联网周刊》“2021年度APP分类排行”榜单</span><br/>
        <span>应用程序图标设计仅供个人用于学习、研究，不会用于商业用途</span>
      </div>
    </div>
  </div>
</template>

<script>
import pageUpOff from '../../assets/images/page-up-off.png'
import pageDownOff from '../../assets/images/page-down-off.png'
import pageUpOn from '../../assets/images/page-up-on.png'
import pageDownOn from '../../assets/images/page-down-on.png'
import iconListTop from '../../assets/images/register-top.png'
import iconListBottom from '../../assets/images/register-bottom.png'
import greenPig from '../../assets/images/pig-green.png'
import feedOver from '../../assets/images/feed-over.png'
import IconList from './components/IconList'

export default {
  name: 'Feed',
  components: {IconList},
  data () {
    return {
      img: {
        pageUpOff,
        pageDownOff,
        pageUpOn,
        pageDownOn,
        iconListTop,
        iconListBottom,
        greenPig,
        feedOver
      },
      pageNum: 1,
      itemShow: false
    }
  },
  methods: {
    pageUp () {
      if (this.pageNum > 1) {
        this.pageNum--
      }
      this.changePage()
    },
    pageDown () {
      if (this.pageNum < 4) {
        this.pageNum++
      }
      this.changePage()
    },
    changePage () {
      if (this.pageNum === 1) {
        this.$refs.pageUp.src = this.img.pageUpOff
        this.$refs.pageDown.src = this.img.pageDownOn
      } else if (this.pageNum === 4) {
        this.$refs.pageUp.src = this.img.pageUpOn
        this.$refs.pageDown.src = this.img.pageDownOff
      } else {
        this.$refs.pageUp.src = this.img.pageUpOn
        this.$refs.pageDown.src = this.img.pageDownOn
      }
    },
    itemClick (item) {
      if (this.itemShow) {
        return
      }
      this.$refs.iconSelect.src = item.url
      this.itemShow = true
      setTimeout(() => {
        this.itemShow = false
      }, 2950)
    }
  },
  mounted () {
    this.changePage()
  }
}
</script>

<style lang="stylus" scoped>

@keyframes ani-move {
  0% {
    transform: translateY(0rem);
  }
  80% {
    transform: translateY(7.7rem);
  }
  100% {
    transform: translateY(7.7rem);
  }
}

.div-clear
  clear: both

.background-div
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: #f4f4f4

.main-div
  margin-top .3rem
  margin-left .3rem
  margin-right .3rem

  .icon-move
    position: fixed
    z-index 1
    width 16%
    height 1.8rem
    top: 2rem
    left: 2.5rem
    animation ani-move 3s

    img
      width: 100%
      height: 100%

.icon-list-border
  width 100%
  height .3rem

.page-div
  height: 1rem

  .page-up-div
    position relative
    width: 2.5rem
    height: 1rem
    margin-left .6rem
    float right

    .page
      position absolute
      width: 100%
      height: .8rem
      background-size: 100% 100%

.icon-list
  background-color white
  height 5.5rem
  width 100%

.select-list
  height 5.5rem
  margin-top .3rem
  width 100%

  .select-list-left
    position relative
    height 5.5rem
    float left
    width 70%

  .select-list-right
    position relative
    height 5.5rem
    float right
    width 20%
    padding-left .3rem
    padding-right .3rem

  .pig-img
    width 5.2rem
    height 5.2rem

  .pig-feed-over
    width 60%
    height 100%
    float right

.bottom-div
  span
    font-family pixel12
    font-size .17rem
</style>
