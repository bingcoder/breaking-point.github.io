<template>
  <div class="recommend">
    <p class="title">{{ title }}</p>
    <p class="topic">{{ topic }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    topic: String,
  },
});
</script>

<style scoped lang="scss"></style>
