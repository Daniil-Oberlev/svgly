<script setup lang="ts">
  import { ref } from 'vue'

  import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

  import AppButton from '@/components/shared/Buttons/AppButton.vue'

  const isOpen = ref(false)

  const closeModal = (): void => {
    isOpen.value = false
  }

  const openModal = (): void => {
    isOpen.value = true
  }

  interface ModalProperties {
    button?: string
    title?: string
    description?: string
    maxWidth?: string
    maxHeight?: string
  }

  defineProps<ModalProperties>()
</script>

<template>
  <slot
    name="trigger"
    :open="openModal"
  >
    <AppButton @click="openModal">{{ button }}</AppButton>
  </slot>
  <Dialog
    :open="isOpen"
    @close="closeModal"
  >
    <div class="dialog-overlay" />

    <div class="dialog__wrapper">
      <div class="dialog__content">
        <DialogPanel
          class="dialog__form"
          :style="{ maxWidth, maxHeight }"
        >
          <DialogTitle
            v-if="title"
            class="dialog__form--title"
            >{{ title }}</DialogTitle
          >
          <p
            v-if="description"
            class="dialog__form--description"
          >
            {{ description }}
          </p>
          <slot :close="closeModal" />
        </DialogPanel>
      </div>
    </div>
  </Dialog>
</template>

<style scoped lang="css">
  .dialog-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dialog__wrapper {
    position: fixed;
    inset: 0;
  }

  .dialog__content {
    display: flex;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .dialog__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    max-width: 28rem;
    border-radius: 1rem;
    background-color: var(--background-primary);
    padding: 1.5rem;
    text-align: left;
    border: 1px solid var(--border-color);
  }

  .dialog__form--title {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: var(--secondary-color);
  }

  .dialog__form--description {
    font-size: 0.875rem;
    color: #6b7280;
  }
</style>
