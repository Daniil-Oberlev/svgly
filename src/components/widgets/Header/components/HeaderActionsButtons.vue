<script setup lang="ts">
  import ThemeToggle from './ThemeToggle.vue'

  import AppButton from '@/components/shared/Buttons/AppButton.vue'

  import type { SimpleLoginEmits } from '~/@types/auth'

  defineEmits<SimpleLoginEmits>()
</script>

<template>
  <div class="header__actions--buttons">
    <ThemeToggle />
    <AppButton @click="$emit('login')">Войти</AppButton>
  </div>
</template>

<style lang="css" scoped>
  .header__actions--buttons {
    display: flex;
    gap: 1ch;
  }
</style>
