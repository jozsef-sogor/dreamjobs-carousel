<template>
  <div class="carousel">
    <job-card 
      v-for="job in jobs"
      :key="job.datailsURL"
      :job="job"
    />
  </div>
</template>

<script>
import JobCard from '@/components/JobCard'

export default {
  data() {
    return {
      isReversed: false
    }
  },
  computed: {
    computedJobs() {
      let jobs = this.$store.getters.getJobsArray(10)
      return  this.isReversed ? jobs.reverse() : jobs
    }
  },
  components: {
    JobCard
  }
}
</script>

<style lang="scss" scoped>

</style>