<template>
  <div class="main-div">
    <div class="title-div">
      <h1 class="title">激奋猪领养登记信息表</h1>
    </div>
    <div class="info-div">
      <div class="info-item">
        <div class="item-name">
          <span>YOUR NAME:</span>
        </div>
        <div class="item-value">
          <input type="text" class="text-input" value="请使用拼音填写"/>
        </div>
        <div class="clear"/>
      </div>
      <div class="info-item">
        <div class="item-name">
          <span>YOUR PHONE MODEL:</span>
        </div>
        <div class="item-value">
          <input type="text" class="text-input" value="请使用品牌拼音、英文、数字填写"/>
        </div>
        <div class="clear"/>
      </div>
      <div class="photo">
        <div class="img-div">
          <div class="left"> </div>
          <div class="center">点击上传认领人照片</div>
          <div class="right"> </div>
          <div class="clean"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterClaim'
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/font.css';
.main-div
  background-color #f4f4f4

  .title-div
    line-height 1.5rem
    background-color #25a4bb

    .title
      font-family pixel12
      font-size .5rem
      color black
      text-align center
      padding-left .5rem
      padding-right .5rem

.info-div
  font-family pixel12

  .info-item
    line-height 1.5rem
    background-color aquamarine

    .item-name
      width 50%
      float left
      text-align right

    .item-value
      width 50%
      float right
      text-align left
    .clear
      clear both

    .text-input
      font-family pixel12
.photo
  font-family pixel12
  background-color #25a4bb
  height 5rem
  .img-div
    .left
      float left
      width 30%
      height 1rem
    .center
      float left
      width 40%
      padding-top .3rem
      padding-bottom .3rem
      line-height 1rem
      font-family pixel12
      font-size .5rem
      color black
      text-align center
    .right
      float right
      width 30%
      height 1rem
    .clean
      clear both

</style>
