<template>
  <div class="code">
    <div class="code--demo">
      <div class="code-content">
        <slot></slot>
      </div>
    </div>
    <div v-if="isShow" class="code--code">
      <slot name="codeText"></slot>
    </div>
    <div
      v-if="$slots.codeText"
      class="code--button"
      :class="isShow ? 'code-open' : ''"
      @click="handleToggleShow">
      {{codeTextBtn}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoPage',
  props: ['title', 'description'],
  data() {
    return {
      isShow: false,
      codeTextBtn: 'Expand'
    }
  },
  methods: {
    handleToggleShow() {
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? 'Hide' : 'Expand'
    }
  }
}
</script>

<style lang="less" scoped>
.code {
  margin-top: 20px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: all .2s;
  &:hover{
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .code--demo {
    border-bottom: 1px solid #ebebeb;
    .code-content {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 20px 30px;
    }
  }

  .code--code {
    animation: show .5s linear 1;
    padding: 10px;
  }

  .code--button {
    color: #d3dce6;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      color: #3eaf7c;
      background-color: #f9fafc;
    }
  }

  .code-open {
    border-top: 1px solid #ebebeb;
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
