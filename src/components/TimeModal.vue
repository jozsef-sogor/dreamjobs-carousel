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

</style>