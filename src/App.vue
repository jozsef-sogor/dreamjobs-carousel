<template>
  <div id="app">
    <h1>DreamJo.bs carousel</h1>
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
    this.$store.dispatch('fetchJobsProxy')
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
  text-align: center;
  margin-top: $space-xl;
}
</style>
