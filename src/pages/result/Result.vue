<template>
  <div class="main-div">
    <div class="logo-div">
      <img class="logo-img" :src="img.resultLogo"/>
    </div>
    <div class="register-info">
      <span class="sp1">恭喜您领养一只激奋猪</span>
      <br/>
      <span class="sp2">DISIGNED BY LIUZHENGNAN</span>
      <span class="sp2 sp3">WWW.THEPIGOFLOYALTYPOINTS.COM</span>
      <hr class="hr"/>
      <div class="text-div">
        <div class="name"><span>SLIP:</span></div>
        <div class="value"><span>00293451294759039245100</span></div>
        <div class="clear"></div>
        <div class="name"><span>STAFF:</span></div>
        <div class="value"><span>LZN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRANS:</span>
        </div>
        <div class="clear"></div>
        <div class="name"><span>DATE:</span></div>
        <div class="value"><span v-html="info.createTime"></span></div>
        <div class="clear"></div>
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
                <span>I'M </span><span class="black-span">NO.{{ info.num }}</span><br/>
                <span>MY</span><br/>
                <span>OWNER IS:</span><br/>
                <img class="direct-img" :src="directImg">
                <span>I LIVE IN:</span><br/>
                <span class="info-input black-input">{{ info.name }}</span>
                <span class="info-input">{{ info.phone }}</span>
              </div>
            </div>
            <div class="green-img-div">
              <img class="img" :src="photo" alt="logo">
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <br>
      <hr class="hr bottom1"/>
      <hr class="hr bottom1"/>
      <div class="bottom-text-div">
        <div class="name"><span>DESCRIPTION:</span></div>
        <div class="value"><span>TIME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRICE:</span></div>
        <div class="clear"></div>
        <div class="name"><span>AMOUNT:</span></div>
        <div class="value"><span></span>
        </div>
      </div>
      <hr class="hr bottom1"/>
    </div>
    <SelectedList v-bind:selected="selected"></SelectedList>
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
import commitImg from '../../assets/images/commit-on.png'
import resultLogo from '../../assets/images/result-logo.png'
import SelectedList from './components/SelectedList'

export default {
  name: 'Result',
  components: {SelectedList},
  data () {
    return {
      claimHeadIcon: claimHeadIcon,
      registerTop: registerTop,
      registerBottom: registerBottom,
      directImg: directImg,
      bottomLogo,
      commitImg,
      pigImg,
      loading: true,
      nowDateTime: new Date(),
      photo: photoImg,
      info: {
        num: '001',
        name: '',
        phone: '',
        photoName: 'none',
        createTime: new Date()
      },
      selected: [],
      img: {
        resultLogo
      }
    }
  },
  mounted () {
    var registerInfoStr = this.$localStorage.get('registerInfoStr')
    var selectedStr = this.$localStorage.get('selectedStr')
    var registerInfo = JSON.parse(registerInfoStr)
    this.info = registerInfo
    this.photo = this.$localStorage.get('registerInfoPhoto')
    var selected = JSON.parse(selectedStr)
    this.selected = selected
    console.info(this.selected)
  }
}
</script>

<style lang="stylus" scoped>
.main-div
  .logo-div
    margin-top 1rem
    width 100%
    height 4rem
    .logo-img
      margin-left 10%
      width 80%
      height 100%
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
      margin-top .2rem

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
            line-height 2.6rem
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

              .black-span
                background-color black
                padding-top .1rem
                padding-right .05rem
                color white

              .direct-img
                height .3rem
                width 100%
                margin-right .1rem

              .info-input
                padding-top 0.07rem
                font-family pixopedia
                font-size .3rem
                line-height .34rem
                display block
                background-color #00ff00

              .black-input
                display block
                width auto
                background-color black
                color white

          .green-img-div
            float right
            height 100%
            width 40%
            position relative

            .img
              margin-top .2rem
              width 80%
              height 50%

            .cap[type="file"]
              position: absolute;
              margin-top .2rem
              width 80%
              height 50%
              left: 0;
              top: 0;
              right 0;
              bottom 0;
              // 设置透明度
              opacity: 0;

          .clear
            clear: both

      .clear
        clear both

    .bottom-div
      height 15%
      padding-left .3rem
      margin-top .3rem
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
.bottom-text-div
  padding-top .1rem
  width 90%
  //background-color aquamarine

  .name
    float left
    margin-left .5rem
    margin-bottom .1rem
    width 40%
    font-family pixopedia

  .value
    float left
    font-family pixopedia

  .clear
    clear both

</style>
