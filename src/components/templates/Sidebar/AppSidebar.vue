<script setup lang="ts">
  import Tabs from '@/components/shared/Tabs/AppTabs.vue'
</script>

<template>
  <aside class="aside">
    <Tabs />
  </aside>
</template>

<style scoped lang="css">
  .aside {
    min-height: 100vh;
    max-width: 300px;
    background-color: var(--background-tertiary);
    padding: 0.5rem;
    border-right: 1px solid var(--border-color);
  }
</style>
