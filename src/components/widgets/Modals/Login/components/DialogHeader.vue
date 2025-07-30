<script setup lang="ts">
  import { X } from 'lucide-vue-next'
  import TypographyHeading from '@/components/shared/Typography/TypographyHeading.vue'

  interface DialogHeaderProperties {
    title?: string
  }

  import type { CloseEmits } from '~/@types/dialog'

  const emit = defineEmits<CloseEmits>()

  const properties = withDefaults(defineProps<DialogHeaderProperties>(), {
    title: 'Войти в систему'
  })

  const handleClose = (): void => {
    emit('close')
  }
</script>

<template>
  <header class="dialog-header">
    <TypographyHeading tag="h2">{{ properties.title }}</TypographyHeading>
    <button
      type="button"
      class="dialog-header__close"
      aria-label="Закрыть диалог"
      @click="handleClose"
    >
      <X :size="20" />
    </button>
  </header>
</template>

<style scoped>
  .dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 1rem;
    border-bottom: 1px solid var(--border-color);
  }

  .dialog-header__close {
    background: none;
    border: none;
    color: var(--secondary-color);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: var(--radius);
    transition: background-color 0.2s ease;
  }

  .dialog-header__close:hover {
    background-color: var(--background-secondary);
  }
</style>
