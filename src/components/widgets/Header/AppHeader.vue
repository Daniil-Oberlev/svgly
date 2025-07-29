<script setup lang="ts">
  import { Zap } from 'lucide-vue-next'

  import ThemeToggle from './ThemeToggle.vue'

  import TypographyH1 from '@/components/shared/Typography/TypographyH1.vue'
  import AppButton from '@/components/shared/Buttons/AppButton.vue'
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <Zap />
      <TypographyH1>svgly</TypographyH1>
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
