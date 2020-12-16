<template>
  <div class="demo">
    <image-shadow :src="this.src1" shadow-hover></image-shadow>
    <image-shadow :src="this.src2" shadow-hover></image-shadow>
    <image-shadow :shadow-radius="20" :src="this.src3" shadow-hover></image-shadow>
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
      src1: 'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true',
      src2: 'https://github.com/image-component/gallery/blob/main/girl/6.jpg?raw=true',
      src3: 'https://github.com/image-component/gallery/blob/main/girl/8.jpg?raw=true'
    }
  }
}
</script>
