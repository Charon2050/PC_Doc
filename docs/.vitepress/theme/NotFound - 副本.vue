<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template><Layout><template #not-found>
  <div data-v-6c4a3ffe="" data-v-98ddab3d="" class="NotFound">
    <p data-v-6c4a3ffe="" class="code">
      404
    </p>
    <h1 data-v-6c4a3ffe="" class="title">
      网址错误或页面被删除
    </h1>
    <div data-v-6c4a3ffe="" class="divider"></div>
    <blockquote data-v-6c4a3ffe="" class="quote">
      <a href="/concept/404">
        为什么会这样?
        上一个页面的链接设置错了;
        网址复制错了/打错了;
        这个页面被我们删除了。
      </a>
    </blockquote>
    <div data-v-6c4a3ffe="" class="action">
      <a data-v-6c4a3ffe="" class="link" href="javascript:history.back()" aria-label="go to home">
        返回
      </a>
    </div>
  </div>
</template></Layout></template>