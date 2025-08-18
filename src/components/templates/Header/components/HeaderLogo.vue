<script setup lang="ts">
  import { Zap } from 'lucide-vue-next'

  import TypographyHeading from '@/components/shared/Typography/TypographyHeading.vue'
</script>

<template>
  <div class="header__logo">
    <Zap />
    <TypographyHeading tag="h1">svgly</TypographyHeading>
  </div>
</template>

<style lang="css" scoped>
  .header__logo {
    display: flex;
    align-items: center;
    gap: 1ch;
    color: var(--secondary-color);
  }
</style>
