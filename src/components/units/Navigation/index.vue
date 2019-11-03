<template>
  <header>
    <vue-container>
      <div class="header__container">
        <div class="flex justify-content-between align-items-center">
          <div>
            <i class="fas fa-bars header__icon"/>
          </div>
          <div>
            <span>채팅</span>
          </div>
          <div>
            <i class="far fa-user header__icon"></i>
          </div>
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
  }
}
</script>

<style lang="scss">
header {
  background-color: $--color-purple;
  color: $oc-white;
}

.header__container {
  padding: 12px 0;
}

.header__icon {
  font-size: 20px;
}

.flex {
  font-weight: bold;
}
</style>