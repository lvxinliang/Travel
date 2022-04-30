<template>
  <div>
    <home-page/>
    <music-player/>
    <next-button/>
  </div>
</template>

<script>
import HomePage from './components/HomePage'
import MusicPlayer from './components/MusicPlayer'
import NextButton from './components/NextButton'
export default {
  name: 'Home',
  components: {NextButton, MusicPlayer, HomePage}
}
</script>
import HomePage from './components/HomePage'
import MusicPlayer from './components/MusicPlayer'
export default {
  name: 'Home',
  components: {
    HomePage,
    MusicPlayer
  }
}
<style lang="stylus" scoped>
</style>
