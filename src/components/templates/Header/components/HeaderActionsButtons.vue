<script setup lang="ts">
  import ThemeToggle from './ThemeToggle.vue'
  import LoginModal from '@/components/widgets/Modals/LoginModal/LoginModal.vue'
</script>

<template>
  <div class="header__actions--buttons">
    <ThemeToggle />
    <LoginModal />
  </div>
</template>

<style lang="css" scoped>
  .header__actions--buttons {
    display: flex;
    gap: 1ch;
  }
</style>
