<template>
  <div class="demo">
    <image-shadow :src="this.src1"></image-shadow>
    <image-shadow :src="this.src2"></image-shadow>
    <image-shadow :shadow-radius="20" :src="this.src3"></image-shadow>
  </div>
</template>

<script>
import ImageShadow from '../image-shadow'

export default {
  components: {
    ImageShadow,
  },

  data() {
    return {
      src1: 'https://github.com/image-tool/react-image-shadow/blob/main/image/red.png?raw=true',
      src2: 'https://github.com/image-tool/react-image-shadow/blob/main/image/blue.jpg?raw=true',
      src3: 'https://github.com/image-tool/react-image-shadow/blob/main/image/white.jpg?raw=true'
    }
  }
}
</script>

<style>
  .demo {
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 40px;
  }
</style>
