<template>
  <section class="carousel">
    <div class="carousel__body">
        <job-card 
          class="carousel__item"
          v-for="(job, index) in computedJobs"
          :key="job.datailsURL"
          :job="job"
          :isHighlighted="index == 2"
          @time-open="handleTimeSelect(job.createdAt)"
        />
    </div>
    <main-button type="primary" @click.native="isReversed=!isReversed">{{isReversed ? 'hátra' : 'előre'}}</main-button>
  </section>
</template>

<script>
import JobCard from '@/components/JobCard'

export default {
  data() {
    return {
      isReversed: false,
    }
  },
  computed: {
    computedJobs() {
      let jobs = this.$store.getters.getJobsArray(10)
      return  this.isReversed ? jobs.reverse() : jobs
    },
  },
  methods: {
    handleTimeSelect(time) {
      this.$store.commit('SET_SELECTEDTIME', time)
    }
  },
  components: {
    JobCard
  }
}
</script>

<style lang="scss" scoped>
  .carousel {
    width: 100%;
    overflow: hidden;
    &__body {
      display: flex;
    }
    &__item {
      margin: $space-s;
      min-width: 250px;
      max-width: 350px;
      width: 90vw;
    }
  }

</style>