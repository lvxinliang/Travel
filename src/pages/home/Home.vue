<template>
  <div>
    <home-header></home-header>
    <music-player/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import MusicPlayer from './components/MusicPlayer'
export default {
  name: 'Home',
  components: {MusicPlayer, HomeHeader}
}
</script>
import HomeHeader from './components/Header'
import MusicPlayer from './components/MusicPlayer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    MusicPlayer
  }
}
<style scoped>

</style>
