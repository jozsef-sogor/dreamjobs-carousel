<template>
  <div class="modal">
  <div class="modal__header">
    <slot name="header"></slot>
  </div>
  <div class="modal__body">
    <slot name="body"></slot>
  </div>
  <div class="modal__footer">
    <slot name="footer"></slot>
  </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .modal {
    @include position-fixed-center;
    @include border-radius(5px);
    min-width: 75vw;
    padding: $space-m;
    background-color: $accent-color;
    border: $dark-color 2px solid;
    &__header {
      padding: 0 $space-s $space-s;
    }
    &__body {
      padding: $space-s;
      margin: auto;
    }
    &__footer {
      @include flex-center();
      padding: $space-s $space-s 0;
    }
  }

  @media only screen and (min-width: 768px) {
    .modal{
      min-width: 25vw;
    }
  }
</style>