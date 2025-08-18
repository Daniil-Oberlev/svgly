<script setup lang="ts">
  import { AppHeader, AppMain, AppSidebar } from './components/templates'
</script>

<template>
  <AppHeader />
  <AppSidebar />
  <AppMain />
</template>

<style lang="css" scoped>
  .main {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .main > :first-child {
    grid-column: 1 / -1;
  }
</style>
