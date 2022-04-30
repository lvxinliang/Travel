<template>
  <div class="main-page">
    <div>
      <img class="music-icon" src="@/assets/images/home_background.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="stylus" scoped>
.main-page {
  position fixed;
    .music-icon {
      padding-bottom 100%;
      position: fixed;
      z-index: -1;
      background-repeat: no-repeat;
      background-size: contain;
      width: 100%;
      height: 100%;
  }
}
</style>
