<script setup lang="ts">
  import AppModal from '../AppModal/AppModal.vue'
  import ProviderButton from './ProviderButton.vue'

  import { PROVIDERS } from './constants'
</script>

<template>
  <AppModal
    button="Войти"
    title="Войти"
    description="Войдите в систему, чтобы начать использовать все возможности"
  >
    <ul class="providers--list">
      <li
        v-for="provider in PROVIDERS"
        :key="provider.label"
      >
        <ProviderButton
          :icon="provider.icon"
          :label="`Войти через ${provider.label}`"
        />
      </li>
    </ul>
  </AppModal>
</template>

<style scoped lang="css">
  .providers--list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
  }
</style>

<style lang="css">
  .provider__list--button {
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }

  .provider__list--button-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: currentColor;
  }
</style>
