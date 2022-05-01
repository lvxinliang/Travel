<template>
  <div id="app">
    <music-player/>
    <router-view/>
  </div>
</template>

<script>
import MusicPlayer from './pages/home/components/MusicPlayer'
export default {
  name: 'App',
  components: {
    MusicPlayer
  }
}
</script>

<style></style>
