<template>
  <div>
    <audio ref="audioTip" style="display:none;">
      <source :src="audio.src">
    </audio>
    <div @click="play" :class="{'active': audio.playing}" class="icons">
      <div class="icon-img">
        <img class="music-icon" src="@/assets/images/music.png"/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MusicPlayer',
  data () {
    return {
      audio: {
        src: 'https://fengxianqi.github.io/v-audio-player/dist/media/sometimes_when_we_touch.010fafb2.mp3',
        playing: false
      }
    }
  },
  methods: {
    play () {
      this.audio.playing = !this.audio.playing
      if (this.audio.playing) {
        this.$refs.audioTip.play()
      } else {
        this.$refs.audioTip.pause()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@keyframes rotate-img
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

.icons
  overflow hidden
  position relative
  height 0
  width .8rem
  padding-bottom .8rem

  .icon-img
    position absolute
    widith 100%
    height 100%
    overflow hidden

    .music-icon
      height 100%

.active
  .icon-img
    .music-icon
      //持续旋转 360 度
      animation: rotate-img 3s infinite linear
</style>
