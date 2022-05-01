<template>
  <div>
    <home-page/>
    <next-button/>
  </div>
</template>

<script>
import HomePage from './components/HomePage'

import NextButton from './components/NextButton'
export default {
  name: 'Home',
  components: {NextButton, HomePage}
}
</script>

<style lang="stylus" scoped>
</style>
