<template>
  <section class="carousel">
    <div class="carousel__body">
        <div class="carousel__stepper carousel__stepper--backward" @click="stepBackward">&lt;</div>
        <div class="carousel__stepper carousel__stepper--forward" @click="stepForward">&gt;</div>
        <div class="carousel__content"             
          @touchstart="handleTouchStart($event)"
          @touchmove="handleTouchMove($event)"
          @touchend="handleTouchEnd($event)"
        >
          <job-card 
            class="carousel__item"
            v-for="(job, index) in computedJobs"
            :key="job.datailsURL"
            :job="job"
            :isHighlighted="index == 2"
            :style="{transform: `translateX(${cardOffset})`}"
            @time-open="handleTimeSelect(job.createdAt)"
          />
        </div>
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
      firstVisibleIndex: 0,
      touch: {
        start: null,
        end: null
      }
    }
  },
  computed: {
    computedJobs() {
      let jobs = this.$store.getters.getJobsArray(10)
      return  this.isReversed ? jobs.reverse() : jobs
    },
    cardOffset() {
      return `calc(${this.firstVisibleIndex * -100}% - ${this.firstVisibleIndex * 1.5}rem)`
    },
    visibleCardsAmount() {
      let deviceType = this.$store.state.deviceType

      switch(deviceType) {
        case 'desktop':
          return 5
        case 'tablet': 
          return 3 
        default: 
          return 1
      }
    }
  },
  methods: {
    handleTimeSelect(time) {
      this.$store.commit('SET_SELECTEDTIME', time)
    },
    stepForward() {
      //this.nextCardWidth = this.$refs.test[this.firstVisibleIndex].$el.clientWidth
      //Ellenőrzés, hogy a sor végére értünk vagy sem
      if(this.firstVisibleIndex >= this.computedJobs.length - this.visibleCardsAmount) { this.firstVisibleIndex = 0; return }
      
      this.firstVisibleIndex++
    },
    stepBackward() {
      //Ellenőrzés, hogy a sor elejére értünk vagy sem
      if(this.firstVisibleIndex <= 0) { this.firstVisibleIndex = this.computedJobs.length - this.visibleCardsAmount; return }
      
      this.firstVisibleIndex--
    },
    handleTouchStart(event) {
      this.touch.start = event.touches[0].clientX;
      this.touch.end = 0;
    },
    handleTouchMove(event) {
      this.touch.end = event.touches[0].clientX;
    },
    handleTouchEnd() {
      //Minimum 20 pixelnyi swipe kell
      if(!this.touch.end || Math.abs(this.touch.end - this.touch.start) < 20) return;
          
 
        this.touch.end < this.touch.start ? this.stepForward() : this.stepBackward()
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
      position: relative;
    }
    &__stepper {
      @include flex-center;
      padding: $space-s;
      width: $space-l;
      cursor: pointer;
      height: 100%;
      background-color: $accent-color;
      transition: .3s ease;
      z-index: 1;
      &--backward {
        @include flex-center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        &:hover {
          transform: translateX(-$space-xs);
        }
      }
      &--forward {
        @include flex-center;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        &:hover {
          transform: translateX($space-xs);
        }
      }
    }
    &__content {
      @include flex-center;
      justify-content: flex-start;
      width: calc(100% - 2 * #{$space-l});
      margin: auto;
    }
    &__item {
      transition: .3s ease;
      margin: $space-s;
      min-width: calculate-card-with(($space-s * 2), 1);
      @include tablet-query {
        min-width: calculate-card-with(($space-s * 2), 3);
      }
      @include desktop-query {
        min-width: calculate-card-with(($space-s * 2), 5);
      }
    }
  }

</style>