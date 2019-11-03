<template>
  <div class="chatting-room">
    <transition name="fade">
      <vue-chatroom-navigation 
        title="장만월 사장님"
        @image-selected="imageSelected"/>
    </transition>

    <vue-container>
      <br>
      <transition-group
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        @after-enter="scrollToBottom">
        <vue-chat-bubble
          v-for="(msg, i) in messages"
          :key="msg.text + i"
          :data-index="i"
          :me="msg.me"
          :text="msg.text"
          :src="msg.src"/>
      </transition-group>
    </vue-container>

    <transition name="fade">
      <form 
        v-if="!loading"
        @submit.prevent="post">
        <vue-chatroom-footer 
          v-model="message"
          @send-button-clicked="post"/>
      </form>
    </transition>
  </div>
</template>

<script>
import VueContainer from '~/containers'
import VueChatroomNavigation from '~/components/units/ChatroomNavigation'
import VueChatroomFooter from '~/components/units/ChatroomFooter'
import VueChatBubble from '~/components/units/ChatBubble'
export default {
  components: {
    VueContainer,
    VueChatroomNavigation,
    VueChatroomFooter,
    VueChatBubble
  },
  data() {
    return {
      loading: false,
      message: '',
      messages: []
    }
  },
  mounted() {
    this.getMessages()
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0
      el.style.transform = 'translate(100px, 0)'
    },
    enter: function(el, done) {
      const delay = el.dataset.index * 80
      setTimeout(function() {
        Velocity(
          el,
          { opacity: 1, transform: 'translate(0, 0)' },
          { complete: done }
        )
      }, delay)
    },
    leave: function(el, done) {
      const delay = el.dataset.index * 80
      setTimeout(function() {
        Velocity(el, { opacity: 0 }, { complete: done })
      }, delay)
    },
    getMessages() {
      const messages = [
        { text: '출근했니?', me: false },
        { text: '출근했냐구?', me: false },
        { text: '어딘데 출근 안하니? 죽고싶니?', me: false },
        { text: '해외 출장중입니다.', me: true }
      ]
      this.loading = true

      setTimeout(() => {
        this.messages = messages
        this.loading = false
      }, 300)
    },
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight)
    },
    post() {
      if (!this.message) return

      const data = {
        text: this.message,
        me: true
      }
      this.messages.push(data)
      this.message = ''
    },
    imageSelected(image) {
      const data = {
        text: '',
        src: image.download_url,
        me: true
      }
      this.messages.push(data)
    }
  }
}
</script>
