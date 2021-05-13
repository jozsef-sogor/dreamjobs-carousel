<template>
  <button class="btn" :class="`btn--${type}`">
    <slot>Rendben</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    }
  }

}
</script>

<style lang="scss" scoped>
  .btn {
    padding: $space-xs $space-s;
    background-color: transparent;
    transition: all .3s ease;
    border: none;
    cursor: pointer;
    &--primary {
      border: $cta-color 2px solid;
      @include border-radius(5px);
      &:hover {
        background-color: $cta-color;
      }
    }
    &--secondary {
      text-decoration: underline;
      &:hover {
        background-color: $accent-color;
      }
    }
  }

</style>