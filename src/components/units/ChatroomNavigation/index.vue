<template>
  <header>
    <vue-container>
      <div class="header__container">
        <div 
          class="flex justify-content-between align-items-center">
          <div @click="$router.push('/')">
            <i class="fas fa-angle-left"></i>
          </div>
          <div>
            <strong>{{ title }}</strong>
          </div>
          <div>
            <span @click="getImages()"><i class="far fa-image"></i></span>
            <i class="fas fa-search" style="margin-left: 8px;"></i>
          </div>
        </div>
      </div>

        <div 
          class="flex align-items-center">
          <div class="image-container">
            <transition-group
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave">
              <img 
                v-for="(image, i) in images"
                :key="image.url + i"
                :data-index="i"
                :src="image.download_url"
                :alt="image.author"
                class="image"
                @click="imageSelected(image)">
            </transition-group>
          </div>
        </div>
    </vue-container>
  </header>
</template>

<script>
import VueContainer from '~/containers'
export default {
  components: {
    VueContainer
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      expanded: false,
      images: []
    }
  },
  mounted() {
    // this.getImages()
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function(el, done) {
      const delay = el.dataset.index * 0
      setTimeout(function() {
        Velocity(el, { opacity: 1, height: '50px' }, { complete: done })
      }, delay)
    },
    leave: function(el, done) {
      const delay = el.dataset.index * 0
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done })
      }, delay)
    },
    async getImages() {
      try {
        if (this.images.length) {
          this.images = []
          return
        }

        const options = {
          method: 'get',
          url: 'https://picsum.photos/v2/list?limit=5'
        }
        const { data } = await this.$axios(options)
        this.images = data
      } catch (err) {
        console.error(err)
      }
    },
    imageSelected(image) {
      this.images = []
      this.$emit('image-selected', image)
    }
  }
}
</script>

<style lang="scss">
header {
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // z-index: 1010;
  background-color: $--color-purple;
  color: $oc-white;
}

.header__container {
  padding: 12px 0;
}

.header__icon {
  font-size: 20px;
}

.image-container {
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }
}
.image {
  backface-visibility: hidden;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 2px;
  object-fit: cover;
  margin: 3px;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s;
}

.expand-enter,
.expand-leave-to {
  opacity: 0;
  height: 0;
}

.expand-enter-to,
.expand-leave {
  opacity: 1;
  height: 100%;
}
</style>