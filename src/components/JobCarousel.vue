<template>
  <section class="carousel">
    <job-card 
      v-for="(job, index) in computedJobs"
      :key="job.datailsURL"
      :job="job"
      :isHighlighted="index == 2"
      @time-open="openTime=true"
    />
    <main-button type="primary" @click.native="isReversed=!isReversed">{{isReversed ? 'hátra' : 'előre'}}</main-button>
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