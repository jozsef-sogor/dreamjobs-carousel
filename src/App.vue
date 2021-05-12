<template>
  <div id="app">
    <job-carousel />
    <time-modal 
      v-if="selectedTime" 
      :time="selectedTime"
      @close-modal="$store.commit('SET_SELECTEDTIME', null)"
    />
  </div>
</template>

<script>
import JobCarousel from '@/components/JobCarousel'
import TimeModal from '@/components/TimeModal'

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  created() {
    this.$store.dispatch('fetchJobsLocal')
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize()
  },
  computed: {
    selectedTime() {
      return this.$store.state.selectedTime
    }
  },
  methods: {
    handleResize() {
      this.$store.dispatch('setDeviceType', window.innerWidth)
    }
  },
  components: {
    JobCarousel,
    TimeModal
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
