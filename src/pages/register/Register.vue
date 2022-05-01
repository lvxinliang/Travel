<template>
  <div class="main-div">
    <div class="title-div">
      <img class="title-img" :src="claimHeadIcon" alt="logo">
    </div>
    <div class="register-body">
      <div class="register-top">
        <img class="register-top-img" :src="registerTop">
      </div>
      <div class="register-info">
        <span class="sp1">欢迎您前来领养一只激奋猪</span>
        <br/>
        <span class="sp2">DISIGNED BY LIUZHENGNAN</span>
        <span class="sp2 sp3">WWW.THEPIGOFLOYALTYPOINTS.COM</span>
        <hr class="hr"/>
        <div class="text-div">
          <div class="name"><span>SLIP:</span></div><div class="value"><span>00293451294759039245100</span></div><div class="clear"></div>
          <div class="name"><span>STAFF:</span></div><div class="value"><span>LZN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRANS:</span></div><div class="clear"></div>
          <div class="name"><span>DATE:</span></div><div class="value"><span v-html="dateTimeStr"></span></div><div class="clear"></div>
        </div>
        <hr class="hr bottom1"/>
        <hr class="hr bottom2"/>
        <div class="green-div">
          <div class="green-left">
            <div class="pig-div">
              <img class="pig-img" :src="pigImg"/>
            </div>
            <div class="num-div">
              <span class="num-sp">#{{ info.num }}</span>
            </div>
          </div>
          <div class="green-right">
            <div class="green-right-body">
              <div class="green-text-div">
                <div class="name">
                  <span>I'M NO.{{info.num}}</span><br/>
                  <span>MY</span><br/>
                  <span>OWNER IS:</span><br/>
                  <img class="direct-img" :src="directImg">
                  <span>I LIVE IN:</span><br/>
                  <input class="info-input" type="text" v-bind:value="info.name"/>
                  <input class="info-input" type="text" v-bind:value="info.phone"/>
                </div>
              </div>
              <div class="green-img-div">
                <img class="img" :src="info.photo" alt="logo">
              </div>
              <div class="clear"></div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <dir class="bottom-div">
          <div class="bottom-logo">
            <img class="bottom-logo-img" :src="bottomLogo">
          </div>
          <div class="commit-div">
            <img class="commit-img" :src="commitImg">
          </div>
          <div class="clear"></div>
        </dir>
      </div>
      <div class="register-bottom">
        <img class="register-bottom-img" :src="registerBottom">
      </div>
    </div>
  </div>
</template>

<script>
import claimHeadIcon from '../../assets/images/claim-head.png'
import registerTop from '../../assets/images/register-top.png'
import registerBottom from '../../assets/images/register-bottom.png'
import directImg from '../../assets/images/dir.png'
import photoImg from '../../assets/images/photo.png'
import pigImg from '../../assets/images/pig.png'
import bottomLogo from '../../assets/images/logo.png'
import commitImg from '../../assets/images/commit.png'
export default {
  name: 'RegisterClaim',
  data () {
    return {
      claimHeadIcon: claimHeadIcon,
      registerTop: registerTop,
      registerBottom: registerBottom,
      directImg: directImg,
      bottomLogo,
      commitImg,
      pigImg,
      nowDateTime: new Date(),
      info: {
        num: '001',
        name: 'LIUZHENGNAN',
        phone: 'IPHONE7 PLUS',
        photo: photoImg
      }
    }
  },
  computed: {
    dateTimeStr: function () {
      // 格式化日期'yy-MM-dd hh:mm'
      return this.nowDateTime.getFullYear() + '/' + (this.nowDateTime.getMonth() + 1) + '/' + this.nowDateTime.getDate() + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + this.nowDateTime.getHours() + ':' + this.nowDateTime.getMinutes()
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/font.css';
@import '../../assets/css/font-pixopedia.css';
@import '../../assets/css/font-k8x12S.css';
.main-div
  background-color #f4f4f4
  position fixed
  height 100vh
  width 100vw
  .title-div
    height 26%
    margin-left .3rem
    margin-right .3rem
    .title-img
      height 2rem
      padding-top 1.5rem
      width 100%
      margin 0 auto
      display block
  .register-body
    //background-color #a41818
    margin-left .3rem
    margin-right .3rem
    height 60%
    .register-top
      height .3rem
      .register-top-img
        height 100%
        width 100%
    .register-info
      height 98%
      background-color white
      .sp1
        margin 0 auto
        display block
        font-size .4rem
        font-family pixel12
        line-height .6rem
        color black
        text-align center
        padding-top .5rem
      .sp2
        margin 0 auto
        display block
        font-size .2rem
        line-height .4rem
        font-family pixopedia
        color black
        text-align center
      .sp3
        padding-bottom .3rem
      .hr
        height .03rem
        width 90%
        background-color black
        margin 0 auto
      .green-div
        background-color #00ff00
        height 3.2rem
        padding-top .2rem
        margin-top .7rem
        .green-left
          margin .2rem .0rem .2rem .3rem
          border-radius .2rem
          height 2.4rem
          float left
          width 2.4rem
          position: relative
          background-color white
          .pig-div
            position absolute
            left 0
            right 0
            top 0
            bottom 0
            .pig-img
              width 100%
              height 100%
          .num-div
            position absolute
            left 0
            right 0
            top 0
            bottom 0
            //background-color aqua
            line-height 100%
            .num-sp
              display block
              text-align center
              width 100%
              line-height 2.7rem
              font-family pixopedia
        .green-right
          height 100%
          float right
          //background-color #ff0000
          width 60%
          .green-right-body
            height 100%
            .green-text-div
              float left
              height 100%
              width 50%
              //background-color beige
              padding-top .2rem
              padding-left .2rem
              .name
                font-size .3rem
                line-height .34rem
                font-family pixopedia
                .direct-img
                  height .3rem
                  width 100%
                  margin-right .1rem
                .info-input
                  font-family pixopedia
                  background-color #00ff00
            .green-img-div
              float right
              height 100%
              width 40%
              .img
                margin-top .2rem
                width 80%
                height 50%
            .clear
              clear: both
        .clear
          clear both
      .bottom-div
        height 15%
        padding-left .3rem
        margin-top .7rem
        //background-color #25a4bb
        .bottom-logo
          float left
          width 50%
          .bottom-logo-img
            height 100%
            width 100%
        .commit-div
          float right
          width 40%
          .commit-img
            height 100%
            width 100%
        .clear
          clear: both
      .bottom1
        margin-bottom .1rem
      .bottom2
        margin-bottom .3rem
    .register-bottom
      height .3rem
      .register-bottom-img
        height 100%
        width 100%

.text-div
  padding-top .3rem
  width 90%
  //background-color aquamarine
  .name
    float left
    margin-left .5rem
    margin-bottom .1rem
    width 20%
    font-family pixopedia
  .value
    float left
    font-family pixopedia
  .clear
    clear both

</style>
