<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template><Layout><template #not-found>
  <div class="NotFound">
    <p class="code">
      404
    </p>
    <h1 class="title">
      网址错误或页面被删除
    </h1>
    <div class="divider"></div>
    <blockquote class="quote">
      <a href="/concept/404">
        为什么会这样?<br>
        1. 上一个页面的链接设置错了；<br>
        2. 网址复制错了/打错了；<br>
        3. 这个页面被我们删除了。<br>
      </a>
    </blockquote>
    <div class="action">
      <a class="link" href="javascript:history.back()" aria-label="go back">
        返回
      </a>
    </div>
  </div>
</template></Layout></template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition:
    border-color 0.25s,
    color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}
</style>
