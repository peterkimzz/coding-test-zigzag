<template>
  <div 
    class="chat-bubble-container"
    :class="[{ me }]">
    <div 
      class="chat-bubble"
      :class="[{ me }, { img: src }]">
      <span v-if="text">{{ text }}</span>
      <img 
        v-if="src"
        :src="src" 
        :alt="src"
        class="image">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    me: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: false
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
$gap: 30px;

.chat-bubble-container {
  margin-bottom: 18px;
  &.me {
    text-align: right;
  }
}

.chat-bubble {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: $oc-white;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  margin-right: $gap;
  font-weight: bold;
  font-size: 0.9rem;

  &.me {
    margin-right: 0;
    margin-left: $gap;
    text-align: right;
    background-color: $--color-purple;
    color: $oc-white;
  }

  &.img {
    padding: 0;
    background-color: transparent;
    overflow: hidden;
    width: 180px;
    height: 180px;
  }

  .image {
    object-fit: cover;
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
  }
}
</style>