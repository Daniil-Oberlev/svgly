<script setup lang="ts">
  import { ref } from 'vue'

  import AppHeader from './components/widgets/Header/AppHeader.vue'
  import LoginDialog from './components/widgets/Modals/Login/LoginDialog.vue'

  const isDialogOpen = ref(false)

  const handleLogin = (_provider?: string): void => {
    isDialogOpen.value = true
  }

  const handleDialogClose = (): void => {
    isDialogOpen.value = false
  }

  const handleProviderLogin = (provider: string): void => {
    console.log(`App: Login with ${provider}`)
    isDialogOpen.value = false
  }
</script>

<template>
  <AppHeader @login="handleLogin" />
  <LoginDialog
    :is-open="isDialogOpen"
    @close="handleDialogClose"
    @login="handleProviderLogin"
  />
</template>
