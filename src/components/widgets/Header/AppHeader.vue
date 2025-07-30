<script setup lang="ts">
  import { HeaderLogo, HeaderActionsButtons } from './components'
  import type { LoginEmits } from '~/@types/auth'

  defineEmits<LoginEmits>()
</script>

<template>
  <header class="header">
    <HeaderLogo />
    <HeaderActionsButtons @login="$emit('login', 'yandex')" />
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
</style>
