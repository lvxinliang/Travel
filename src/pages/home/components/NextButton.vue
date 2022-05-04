<template>
  <div class="main-div">
    <div @click="next" class="icons">
      <div class="icon-img">
        <img class="button-icon" :src="buttonIcon"/>
      </div>
    </div>
  </div>
</template>

<script>

import buttonOff from '../../../assets/images/button_off.png'
import buttonOn from '../../../assets/images/button_on.png'

export default {
  name: 'NextButton',
  data () {
    return {
      buttonIcon: buttonOff
    }
  },
  methods: {
    next () {
      this.buttonIcon = (this.buttonIcon === buttonOff ? buttonOn : buttonOff)
      // 通过路由跳转到register页面
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-div
  z-index: 9999;
  position: fixed;
  right .6rem
  bottom 2rem

  .icons
    overflow hidden
    position relative
    height 0
    width 3.8rem
    padding-bottom 2.8rem

    .icon-img
      position absolute
      widith 100%
      height 100%
      overflow hidden

      .button-icon
        height 100%

</style>
