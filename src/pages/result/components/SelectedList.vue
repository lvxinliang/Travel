<template>
  <div>
    <div class="icon-div" v-for="(item) in selected" :key="item">
      <img class="icon-img" :src="'static/icons/res' + item + '.png'"/>
    </div>
  </div>
</template>

<script>

export default {
  props: ['selected'],
  name: 'SelectedList',
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.icon-div
  margin-top .3rem
  margin-left .6rem
  margin-right .6rem
  .icon-img
    width 100%
    height 6rem

</style>
