<script setup lang="ts">
  import { computed, ref } from 'vue'

  import AppModal from '@/components/widgets/Modals/AppModal/AppModal.vue'

  import AppButton from '@/components/shared/Buttons/AppButton.vue'
  import AppIcon from '@/components/shared/Icon/AppIcon.vue'
  import { ENDPOINTS } from '@/api/endpoints'

  interface IconModalProperties {
    modelValue: string
  }

  const properties = defineProps<IconModalProperties>()
  const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void
  }>()

  const searchQuery = ref('')
  const isLoading = ref(false)
  const allIconNames = ref<string[]>([])

  const filteredIconNames = computed(() => {
    const q = searchQuery.value.trim().toLowerCase()
    if (!q) return allIconNames.value
    const result: string[] = []
    for (const item of allIconNames.value) {
      if (item.toLowerCase().includes(q)) result.push(item)
    }
    return result
  })

  const selectIcon = (raw: string, close: () => void): void => {
    emit('update:modelValue', raw)
    close()
  }

  const loadIcons = async (): Promise<void> => {
    isLoading.value = true
    try {
      const response = await fetch(ENDPOINTS.list)
      const contentType = response.headers.get('content-type') ?? ''
      if (!contentType.includes('application/json')) return
      const list = (await response.json()) as unknown
      if (Array.isArray(list)) {
        const next: string[] = []
        for (const item of list) {
          if (typeof item === 'string') next.push(item)
        }
        allIconNames.value = next
      }
    } finally {
      isLoading.value = false
    }
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
        @click="(open(), allIconNames.length === 0 && loadIcons())"
      >
        <AppIcon
          class="icon__form-button-icon"
          :raw="properties.modelValue"
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

      <div
        v-if="!isLoading"
        class="icons-grid"
      >
        <AppButton
          v-for="(raw, idx) in filteredIconNames"
          :key="idx"
          class="icons-grid__item"
          @click="selectIcon(raw, close)"
        >
          <AppIcon :raw="raw" />
        </AppButton>
      </div>
      <p v-else>Загрузка...</p>
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
