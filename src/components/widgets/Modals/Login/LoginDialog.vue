<script setup lang="ts">
  import { ref } from 'vue'

  import { DialogFooter, DialogHeader, DialogSocials } from './components'

  import type { Provider } from '~/@types/auth'

  interface LoginDialogProperties {
    isOpen: boolean
  }

  interface LoginDialogEmits {
    (event: 'close'): void
    (event: 'login', provider: Provider): void
  }

  const properties = defineProps<LoginDialogProperties>()
  const emit = defineEmits<LoginDialogEmits>()

  const dialogReference = ref<HTMLDialogElement | undefined>(undefined)

  const handleClose = (): void => {
    emit('close')
  }

  const handleLogin = (provider: Provider): void => {
    emit('login', provider)
  }

  defineExpose({
    open: () => dialogReference.value?.showModal(),
    close: () => dialogReference.value?.close()
  })
</script>

<template>
  <dialog
    ref="dialogReference"
    class="login-dialog"
    role="dialog"
    aria-modal="true"
    :aria-label="properties.isOpen ? 'Вход в систему' : undefined"
    :open="properties.isOpen"
    @cancel="handleClose"
  >
    <div class="login-dialog__content">
      <DialogHeader @close="handleClose" />

      <div class="login-dialog__body">
        <p class="login-dialog__description">
          Войдите в систему, чтобы начать использовать все возможности
          <strong>svgly</strong>
        </p>

        <DialogSocials @login="handleLogin" />

        <DialogFooter />
      </div>
    </div>
  </dialog>
</template>

<style scoped>
  .login-dialog {
    width: 100%;
    max-width: 400px;
    background-color: transparent;
    border: none;
    border-radius: var(--radius, 8px);
    padding: 0;
    margin: auto;
    display: block;
    z-index: 1000;
  }

  .login-dialog[open] {
    display: block;
  }

  .login-dialog::backdrop {
    background-color: var(--dialog-backdrop, rgba(0, 0, 0, 0.5));
  }

  .login-dialog__content {
    background-color: var(--background-primary);
    border-radius: var(--radius, 8px);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 400px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    opacity: 0;
    transform: scale(0.95);
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  .login-dialog[open] .login-dialog__content {
    opacity: 1;
    transform: scale(1);
  }

  .login-dialog__body {
    padding: 1.5rem;
  }

  .login-dialog__description {
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    opacity: 0.8;
  }
</style>
