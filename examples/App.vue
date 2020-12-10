<template>
  <div class="test">
    <image-shadow :width="200" :src="this.src1"></image-shadow>
    <image-shadow class-name="22" :src="this.src1"></image-shadow>
    <image-shadow :shadow-blur="10" :src="this.src2"></image-shadow>
    <image-shadow shadow-hover :src="this.src3"></image-shadow>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        src1: 'https://github.com/image-component/react-image-shadow/blob/main/image/red.png?raw=true',
        src2: 'https://github.com/image-component/react-image-shadow/blob/main/image/blue.jpg?raw=true',
        src3: 'https://github.com/image-component/react-image-shadow/blob/main/image/white.jpg?raw=true'
      }
    }
  }
</script>

<style>
body {
  padding: 10em;
}

.test {
  display: flex;
}

.vue-image-shadow + .vue-image-shadow {
  margin-left: 30px;
}
</style>
