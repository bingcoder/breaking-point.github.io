<template>
  <div class="content" :id="title" :style="{ background: color }">
    <p class="title">{{ title }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    color: String,
  },
  setup(props) {
    console.log(props.title);
  },
});
</script>

<style scoped lang="scss">
/* #244F75
#60BFBF
#8C4B7E
#F8BB44
#F24B4B */
.content {
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 3rem;
  color: rgba($color: #ffffff, $alpha: 0.8);
  &::before {
    /* content: ''; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    opacity: 0.05;
    transform-origin: center center;
    transform: rotate(-45deg);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &:hover {
    &::before {
      transform: scale(3);
      opacity: 0.1;
    }
  }
  .title {
    z-index: 1;
  }
}
</style>
