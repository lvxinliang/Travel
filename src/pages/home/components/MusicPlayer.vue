<template>
  <div class="music-div">
    <audio ref="audioTip" style="display:none;">
      <source :src="audio.src">
    </audio>
    <div @click="play" :class="{'active': audio.playing}" class="icons">
      <div class="icon-img">
        <img class="music-icon" :src="audio.playIcon"/>
      </div>
    </div>
  </div>

</template>

<script>

import musicMute from '../../../assets/images/music_mute.png'
import musicPlay from '../../../assets/images/music_play.png'
import music from '../../../assets/audio/music.mp3'
export default {
  name: 'MusicPlayer',
  data () {
    return {
      audio: {
        // src: 'https://fengxianqi.github.io/v-audio-player/dist/media/sometimes_when_we_touch.010fafb2.mp3',
        src: music,
        playing: false,
        playIcon: musicMute
      }
    }
  },
  methods: {
    play () {
      this.audio.playing = !this.audio.playing
      if (this.audio.playing) {
        this.$refs.audioTip.play()
        this.audio.playIcon = musicPlay
      } else {
        this.$refs.audioTip.pause()
        this.audio.playIcon = musicMute
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

.music-div
  z-index: 9999;
  position: fixed;
  left 1rem
  top .5rem

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
