<template>
  <div>
    <div class="loading-div">
      <img
        class="loading-img"
        :src="imgSrc"
        alt="loading"/>
    </div>
  </div>
</template>

<script>
import loadingImg from '../../assets/images/loading.gif'

export default {
  name: 'PageLoading',
  data () {
    return {
      imgSrc: loadingImg,
      url: '/register'
    }
  },
  mounted () {
    setTimeout(() => {
      this.$router.push(this.url)
    }, 5000)
  }
}
</script>

<style lang="stylus" scoped>
.loading-div
  position fixed
  line-height calc(100vh)
  background-color #ffffff

  .loading-img
    width 100%
</style>
