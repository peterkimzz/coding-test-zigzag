<template>
  <div id="home__page">
    <vue-chatting/>
  </div>
</template>

<script>
import VueChatting from '~/components/groups/Chatting'
export default {
  components: {
    VueChatting
  }
}
</script>

<style lang="scss">
.services-enter-active {
  animation: slide-right 0.4s;
}
.services-leave-active {
  animation: slide-left 0.4s reverse;
}

@keyframes slide-right {
  0% {
    transform: translateX(-10vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-left {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(10vw);
    opacity: 0;
  }
}
</style>