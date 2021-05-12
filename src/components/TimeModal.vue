<template>
<base-modal>
  <div slot="header">
    <h3>Az állás készítésének időpontja</h3>
  </div>

  <div slot="body">
    <p>{{time}}</p>
  </div>

  <div slot="footer">
    <main-button type="primary" @click.native="$emit('close-modal')"></main-button>
  </div>

</base-modal>
  
</template>

<script>
import BaseModal from '@/components/small/BaseModal'
export default {
  props: {
    time: String
  },
  components: {
    BaseModal
  }
}
</script>

<style lang="scss" scoped>

</style>