<script setup lang="ts">
  import { Sun, Moon } from 'lucide-vue-next'

  import AppButton from '@/components/shared/Buttons/AppButton.vue'
  import { useTheme } from '@/composables/useTheme'

  const { theme, toggleTheme } = useTheme()
</script>

<template>
  <AppButton
    variant="secondary"
    aria-label="Сменить тему"
    @click="toggleTheme"
  >
    <Sun
      v-if="theme === 'light'"
      class="icon"
    />
    <Moon
      v-else
      class="icon"
    />
  </AppButton>
</template>
