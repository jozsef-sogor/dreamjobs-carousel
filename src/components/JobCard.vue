<template>
<div class="card" :class="{'card--highlighted': isHighlighted}">
  <h2 class="card__title">{{job.title}}</h2>
  <p class="card__subtitle">{{job.companyName}}</p>
  <ul class="card__technologies-container">
    <li 
      class="card__tech-pill" 
      :class="{'card__tech-pill--highlighted': isHighlighted}" 
      v-for="(tech, index) in job.technologies" 
      :key="index"
    >
      {{tech}}
    </li>
  </ul>

  <main-button type="secondary" @click.native="$emit('time-open')">Idő megtekintése</main-button>
</div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    },
    isHighlighted: {
      type: Boolean,
      default: false,
    }
  }

}
</script>

<style lang="scss" scoped>
  .card {
    @include border-radius(10px);
    padding: $space-m;
    margin: $space-l auto;
    position: relative;
    border: $accent-color 2px solid;
    text-align: center;
    &__title {
      font-size: $font-l;
      margin-bottom: $space-xxs;
      padding: 0;
    }
    &__subtitle{
      padding: 0;
      margin: 0;
      font-size: $font-m;
    }
    &__technologies-container{
      display: flex;
      flex-wrap: wrap;
      margin: $space-xl auto $space-m;
      padding: 0;
    }
    &__tech-pill {
      @include border-radius(20px);
      @include list-reset;
      padding: $space-xxs $space-xs;
      margin: $space-xxs;
      font-size: $font-s;
      background-color: $accent-color;
      &--highlighted {
        border: $dark-color 1px solid
      }
    }
    &--highlighted {
      border-color: $cta-color;
      background-color: $accent-color;
    }
    
  }

</style>