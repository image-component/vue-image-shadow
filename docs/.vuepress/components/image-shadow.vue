<template>
  <div 
    class="vue-image-shadow"
    :class="shadowClass"
    :style="shadowStyle">
    <img
      class="vue-image-shadow-img"
      :src="src"
      :width="width"
      :style="imgStyle" 
    />
    <div
      class="vue-image-shadow-card"
      :style="cardStyle" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageShadow',
  props: {
    className: {
      type: String
    },
    shadowBlur: {
      type: Number,
      default: 20
    },
    shadowHover: {
      type: Boolean,
      default: false
    },
    shadowRadius: {
      type: Number,
      default: 8
    },
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 300
    },
  },

  data() {
    return {
      shadowClass: {},
      shadowStyle: {},
      imgStyle: {},
      cardStyle: {},
    }
  },

  mounted() {
    this.loadStyle()
  },

  methods: {
    loadStyle () {
      // shadowClass
      this.shadowClass = this.shadowHover ? `vue-image-shadow-hover ${this.className}` : this.className
      // shadowStyle
      this.shadowStyle = {
        "width": `${this.width}px`
      }
      // imgStyle
      this.imgStyle = {
        "border-radius": `${this.shadowRadius}px`
      }
      // cardStyle
      this.cardStyle = {
        "background-image": `url(${this.src})`,
        "border-radius": `${this.shadowRadius}px`,
        "filter": `blur(${this.shadowBlur}px)`
      }
    }
  },
}
</script>

<style lang="less" scoped>
.vue-image-shadow {
  position: relative;
  z-index: 0;

  img {
    transition: all 0.4s ease;
  }

  &-card {
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100%;
    bottom: -10%;
    left: 5%;
    width: 90%;
    height: 95%;
    z-index: -1;
    transition: all 0.4s;
  }

  &-hover:hover {
    img {
      transform: translateY(-6px);
    }

    .vue-image-shadow-card {
      left: 10%;
      bottom: -20%;
      width: 80%;
    }
  }
}
</style>