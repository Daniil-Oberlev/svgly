<script setup lang="ts">
  import { HeaderLogo, HeaderActionsButtons } from './components'
</script>

<template>
  <header class="header">
    <HeaderLogo />
    <HeaderActionsButtons />
  </header>
</template>

<style lang="css" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    background-color: var(--background-primary);
    border-bottom: 1px solid var(--border-color);
  }
</style>
