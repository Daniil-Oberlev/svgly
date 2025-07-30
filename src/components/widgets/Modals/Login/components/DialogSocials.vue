<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import AppButton from '@/components/shared/Buttons/AppButton.vue'

  import { PROVIDERS } from './providers'

  import type { LoginEmits } from '~/@types/auth'

  const emit = defineEmits<LoginEmits>()

  import type { Provider } from '~/@types/auth'

  const handleLogin = (provider: Provider): void => {
    console.log('DialogSocials: handleLogin called with provider:', provider)
    emit('login', provider)
  }
</script>

<template>
  <ul class="dialog-socials">
    <li
      v-for="provider in PROVIDERS"
      :key="provider.name"
    >
      <AppButton
        class="login-dialog__provider"
        @click="handleLogin(provider.name as Provider)"
      >
        <FontAwesomeIcon
          class="login-dialog__provider-icon"
          :icon="provider.icon"
        />
        Продолжить с {{ provider.label }}
      </AppButton>
    </li>
  </ul>
</template>

<style scoped>
  .dialog-socials {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .login-dialog__provider {
    display: flex;
    gap: 0.75rem;
  }

  .login-dialog__provider-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: currentColor;
  }
</style>
