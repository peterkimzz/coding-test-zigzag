<template>
  <div class="index-container">
    <div>
      <div class="lr-padding">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tbPadding: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.tb-padding {
  padding-top: 41px + 10px;
  padding-bottom: 100px;

  @media (min-width: 1128px) {
    padding-top: 44px + 10px;
  }
}
.lr-padding {
  margin: 0 auto;
  max-width: 414px;
  padding: 0 20px;

  @media (min-width: 1128px) {
    padding: 0;
  }
}
</style>