<template>
  <section class="carousel">
    <job-card 
      v-for="job in computedJobs"
      :key="job.datailsURL"
      :job="job"
      @time-open="openTime=true"
    />
    <button class="btn btn--primary" @click="isReversed=!isReversed">{{isReversed ? 'hátra' : 'előre'}}</button>
  </section>
</template>

<script>
import JobCard from '@/components/JobCard'

export default {
  data() {
    return {
      isReversed: false,
      openTime: false
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