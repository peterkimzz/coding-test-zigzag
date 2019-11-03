<template>
  <div class="chatting">

    <transition name="fade">
      <vue-navigation/>
    </transition>

    <vue-container>
      <transition-group
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave">
        <vue-chatroom 
          v-for="(user,index) in users"
          :data-index="index"
          :key="user.login.uuid"
          :uuid="user.login.uuid"
          :thumbnail-url="user.picture.large"
          :name="`${user.name.title} ${user.name.first} ${user.name.last}`"
          :contents="user.location.timezone.description + user.email"
          :date="user.dob.date"
          :alert="user.dob.age"/>
      </transition-group>
    </vue-container>
  </div>
</template>

<script>
import VueContainer from '~/containers'
import VueNavigation from '~/components/units/Navigation'
import VueChatroom from '~/components/units/Chatroom'
export default {
  components: {
    VueContainer,
    VueNavigation,
    VueChatroom
  },
  mounted() {
    this.getData()
  },
  data() {
    return {
      dataFetched: false,
      users: []
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0
      el.style.transform = 'translate(-100px, 0)'
    },
    enter: function(el, done) {
      const delay = el.dataset.index * 40
      setTimeout(function() {
        Velocity(
          el,
          { opacity: 1, transform: 'translate(0, 0)' },
          { complete: done }
        )
      }, delay)
    },
    leave: function(el, done) {
      const delay = el.dataset.index * 40
      setTimeout(function() {
        Velocity(el, { opacity: 0 }, { complete: done })
      }, delay)
    },
    async getData() {
      try {
        this.dataFetched = false
        this.users = []

        const options = {
          method: 'get',
          url: 'https://randomuser.me/api',
          params: {
            results: 10
          }
        }
        const { data } = await this.$axios(options)

        this.users = data.results
        this.dataFetched = true
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-14px);
}
.slide-enter-to,
.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>