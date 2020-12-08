# 🎁 Demo

## Base

Basic display.

<demo-code>
  <demo-1></demo-1>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo">
        <image-shadow :width="280" :src="this.src1"></image-shadow>
        <image-shadow :width="280" :src="this.src2"></image-shadow>
        <image-shadow :width="280" :shadow-radius="20" :src="this.src3"></image-shadow>
      </div>
    </template>

    <script>
    export default {
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
        grid-template-columns: repeat(auto-fill, 280px);
        grid-gap: 40px;
      }
    </style>
  </highlight-code>
</demo-code>

## Hover

Use `shadow-hover` to turn on the floating effect.

<demo-code>
  <demo-2></demo-2>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo">
        <image-shadow :width="280" :src="this.src1" shadow-hover></image-shadow>
        <image-shadow :width="280" :src="this.src2" shadow-hover></image-shadow>
        <image-shadow :width="280" :shadow-radius="20" :src="this.src3" shadow-hover></image-shadow>
      </div>
    </template>
  </highlight-code>
</demo-code>
