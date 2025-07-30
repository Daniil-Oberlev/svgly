<script setup lang="ts">
  import { Zap } from 'lucide-vue-next'

  import ThemeToggle from './ThemeToggle.vue'

  import TypographyHeading from '@/components/shared/Typography/TypographyHeading.vue'
  import AppButton from '@/components/shared/Buttons/AppButton.vue'
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <Zap />
      <TypographyHeading tag="h1">svgly</TypographyHeading>
    </div>

    <div class="header__actions--buttons">
      <ThemeToggle />
      <AppButton>Войти</AppButton>
    </div>
  </header>
</template>

<style lang="css" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    background-color: var(--background-primary);
  }

  .header__logo {
    display: flex;
    align-items: center;
    gap: 1ch;
    color: var(--secondary-color);
  }

  .header__actions--buttons {
    display: flex;
    gap: 1ch;
  }
</style>
