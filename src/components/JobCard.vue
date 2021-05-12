<template>
<div class="card">
  <h2 class="card__title">{{job.title}}</h2>
  <p class="card__subtitle">{{job.companyName}}</p>
  <ul class="card__technologies-container">
    <li class="technologies-container__tech-pill" v-for="(tech, index) in job.technologies" :key="index">{{tech}}</li>
  </ul>
  <button class="btn btn--secondary" @click="$emit('time-open')">Idő megtekintése</button>
</div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>

</style>