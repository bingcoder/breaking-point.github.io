<template>
  <div class="statistics">
    <div class="item" v-for="item in list" :key="item.title">
      <h2 class="title">{{ item.title }}</h2>
      <p>
        包含
        <template v-for="(it, i) in item.children" :key="it">
          <router-link :to="`/${item.base}/${it}`">{{
            it.toUpperCase()
          }}</router-link
          >{{ i === item.children.length - 1 ? '' : '、' }}
        </template>
        {{ item.detail }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      list: [
        {
          title: '基础📖',
          base: 'base',
          detail: '等基础知识。',
          children: ['html', 'css', 'javascript'],
        },
        {
          title: '框架🚀',
          base: 'frame',
          detail:
            '等框架、以及它们的周边生态。React：redux、redux-saga、react-router-dom。',
          children: ['react', 'vue'],
        },
        {
          title: '构建🔧',
          base: 'build',
          detail:
            '等构建工具。包含webpack的核心tapable、自己实现style-loader、file-loader、和自定义plugin',
          children: ['webpack'],
        },
        {
          title: '其他💡',
          base: 'other',
          detail: '等其他知识。包含git的常用命令。',
          children: ['git'],
        },
      ],
    };
  },
  props: {
    title: String,
    topic: String,
  },
});
</script>

<style scoped lang="scss">
@media (max-width: 719px) {
  .item {
    max-width: 100%;
    padding: 0 2.5rem;
  }
  .statistics {
    flex-direction: column;
  }
}
.statistics {
  border-top: 1px solid var(--c-border);
  padding: 1.2rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  /* align-items: flex-start; */
  justify-content: space-between;

  h2 {
    border-bottom: none;
    font-size: 1.4rem;
    font-weight: 500;
    padding-bottom: 0;
    color: var(--c-text-light);
  }
}
.item {
  flex: 1;
  flex-basis: 30%;
  max-width: 30%;
  color: var(--c-text-lighter);
  line-height: 1.7;
}
</style>
