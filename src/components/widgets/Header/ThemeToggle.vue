<script setup lang="ts">
  import { Sun, Moon } from 'lucide-vue-next'

  import AppButton from '@/components/shared/Buttons/AppButton.vue'

  import { watch } from 'vue'
  import { usePreferredColorScheme, useStorage } from '@vueuse/core'

  const preferredColorScheme = usePreferredColorScheme()
  const theme = useStorage('theme', preferredColorScheme.value === 'dark' ? 'dark' : 'light')

  const toggleTheme = (): void => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watch(
    theme,
    newTheme => {
      document.documentElement.classList.toggle('theme-dark', newTheme === 'dark')
      document.documentElement.classList.toggle('theme-light', newTheme === 'light')
    },
    { immediate: true }
  )
</script>

<template>
  <AppButton
    variant="secondary"
    aria-label="Сменить тему"
    @click="toggleTheme"
  >
    <Sun class="icon sun" />
    <Moon class="icon moon" />
  </AppButton>
</template>

<style lang="css" scoped>
  .icon {
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  .sun,
  .moon {
    position: absolute;
  }

  .sun {
    opacity: 1;
    transform: rotate(0);
  }

  .moon {
    opacity: 0;
    transform: rotate(-90deg);
  }

  .theme-dark .sun {
    opacity: 0;
    transform: rotate(90deg);
  }

  .theme-dark .moon {
    opacity: 1;
    transform: rotate(0);
  }
</style>
