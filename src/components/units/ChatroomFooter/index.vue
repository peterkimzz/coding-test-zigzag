<template>
  <div class="chatting-room__footer">
    <vue-container :tb-padding="false">
      <div class="flex justify-content-between align-items-center">
        <div class="chatting__input-container">
          <el-input
            placeholder="메세지를 입력하세요."
            :value="value"
            class="chatting__input"
            @input="v => $emit('input', v)"/>
        </div>
        <div
          type="submit"
          class="chatting__send-button"
          @click="$emit('send-button-clicked')"><i class="far fa-envelope"></i></div>
      </div>
    </vue-container>
  </div>
</template>

<script>
import VueContainer from '~/containers'
export default {
  components: {
    VueContainer
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.chatting-room__footer {
  background-color: $oc-white;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10px 0;

  .chatting__input-container {
    flex: 1;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
    padding: 4px;
    overflow: hidden;
    border-radius: 24px;
    background-color: $oc-white;
  }
  input {
    border: 0 !important;
    outline: 0 !important;
  }
  .chatting__send-button {
    margin-left: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    background-color: $--color-purple;
    color: $oc-white;
  }
}
</style>