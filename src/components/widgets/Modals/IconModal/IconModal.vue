<script setup lang="ts">
  import { computed, ref } from 'vue'

  import AppModal from '@/components/widgets/Modals/AppModal/AppModal.vue'

  import AppButton from '@/components/shared/Buttons/AppButton.vue'
  import AppIcon from '@/components/shared/Icon/AppIcon.vue'

  interface IconModalProperties {
    modelValue: string
  }

  const properties = defineProps<IconModalProperties>()
  const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void
  }>()

  const searchQuery = ref('')

  const iconModules = import.meta.glob('@/icons/*.svg', { eager: true })
  const allIconNames = Object.keys(iconModules)
    .map(path => {
      const match = path.match(/([^/\\]+)\.svg$/)
      return match ? match[1] : ''
    })
    .filter(name => name.length > 0)
    .sort((a, b) => a.localeCompare(b))

  const filteredIconNames = computed(() => {
    const q = searchQuery.value.trim().toLowerCase()
    if (!q) return allIconNames
    return allIconNames.filter(name => name.toLowerCase().includes(q))
  })

  const selectIcon = (name: string, close: () => void): void => {
    emit('update:modelValue', name)
    close()
  }
</script>

<template>
  <AppModal
    title="Выберите иконку"
    max-width="40rem"
    max-height="80vh"
  >
    <template #trigger="{ open }">
      <AppButton
        class="icon__form-button"
        @click="open"
      >
        <AppIcon
          class="icon__form-button-icon"
          :name="properties.modelValue"
        />
      </AppButton>
    </template>

    <template #default="{ close }">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск иконок..."
        class="dialog__search"
      />

      <div class="icons-grid">
        <AppButton
          v-for="name in filteredIconNames"
          :key="name"
          class="icons-grid__item"
          @click="selectIcon(name, close)"
        >
          <AppIcon :name="name" />
        </AppButton>
      </div>
    </template>
  </AppModal>
</template>

<style scoped lang="css">
  .icon__form-button {
    height: 3rem;
    width: 3rem;
    padding: 0.5rem;
  }

  .icon__form-button-icon {
    width: 100%;
    height: 100%;
  }

  .dialog__search {
    width: 100%;
    padding: 0.5rem 0.75rem;
    color: var(--secondary-color);
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    background: var(--background-secondary);
    margin-bottom: 0.5rem;
  }

  .icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(48px, 48px));
    justify-content: start;
    grid-auto-rows: 48px;
    gap: 0.5rem;
    padding: 0.25rem 0;
  }

  .icons-grid__item {
    width: 48px;
    height: 48px;
    padding: 0.5rem;
  }

  .icons-grid__item :deep(svg) {
    width: 100%;
    height: 100%;
  }
</style>
