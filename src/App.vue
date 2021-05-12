<template>
  <div id="app">
    <job-carousel />
  </div>
</template>

<script>
import JobCarousel from '@/components/JobCarousel'

export default {
  name: 'App',
  created() {
    this.$store.dispatch('fetchJobsLocal')
  },
  components: {
    JobCarousel
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
