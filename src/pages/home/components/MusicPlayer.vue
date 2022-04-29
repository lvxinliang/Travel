<template>
  <div>
    <audio ref="audioTip" style="display:none;">
      <source :src="audio.src">
    </audio>
    <div @click="play" :class="{'active': audio.playing}" class="icons">
      <div class="icon">
        <div class="icon-img">
          <img class="music-icon" src="@/assets/images/music.png"/>
        </div>
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
  height 0
  width .8rem
  padding-bottom .8rem
  .icon
    position relative
    overflow hidden
    float left
    width 100%
    padding-bottom 100%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      .music-icon
        height 100%
.active
  .icon
    .icon-img
      .music-icon
        //持续旋转 360 度
        animation: rotate-img 3s infinite linear
</style>
