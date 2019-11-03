<template>
  <div class="uuid">
    <vue-chatting-room/>
  </div>
</template>

<script>
import VueChattingRoom from '~/components/groups/ChattingRoom'
export default {
  components: {
    VueChattingRoom
  }
}
</script>

<style lang="scss" scoped>
.uuid {
  background-color: $oc-gray-1;
  min-height: 100vh;
  padding-bottom: 70px;
}
</style>