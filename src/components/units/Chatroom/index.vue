<template>
  <nuxt-link 
    class="chatroom"
    :to="`/${uuid}`">
    <div class="flex align-items-center justify-content-between">
      <div class="chatroom__image-container">
        <transition name="fade">
          <img 
            :src="thumbnailUrl" 
            :alt="name"
            class="chatroom__image">
        </transition>
      </div>
      <div class="chatroom__contents-container">
        <h4 class="chatroom__name">{{ name }}</h4>
        <p class="chatroom__contents">{{ contents }}</p>
      </div>
      <div class="chatroom__info-container">
        <div class="chatroom__date">{{ date | moment('MM.DD') }}</div>
        <div 
          v-if="alert"
          class="chatroom__alert-number">{{ alert }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import VClamp from 'vue-clamp'
export default {
  components: {
    VClamp
  },
  props: {
    uuid: {
      type: String,
      default: ''
    },
    thumbnailUrl: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    contents: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    alert: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.chatroom {
  display: block;
  text-decoration: none !important;
  padding: 18px 0;
}

.chatroom__image-container {
  border-radius: 50%;
  width: 56px;
  height: 56px;
  overflow: hidden;
  margin-right: 14px;
  flex: 0 0 auto;
}
.chatroom__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.chatroom__contents-container {
  text-align: left;
  flex: 1 1 auto;
}
.chatroom__name {
  margin: 0;
  color: $oc-black;
}
.chatroom__contents {
  margin: 0;
  font-size: 0.9rem;
  color: $--color-cool-grey;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  max-width: 160px;
  width: 100%;
  overflow: hidden;

  @media (min-width: 375px) {
    max-width: 220px;
  }
  @media (min-width: 414px) {
    max-width: 250px;
  }
}

.chatroom__info-container {
  font-size: 0.8rem;
  text-align: right;
  margin-left: 14px;
  flex-shrink: 0;
}

.chatroom__date {
  color: $--color-cool-grey;
  font-weight: 400;
}
.chatroom__alert-number {
  display: block;
  margin-left: auto;
  font-weight: 400;
  text-align: center;
  background-color: $--color-purple;
  border-radius: 50%;
  color: $oc-white;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 10px;
}
</style>