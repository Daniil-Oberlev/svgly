<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

  import AppButton from '@/components/shared/Buttons/AppButton.vue'

  interface ProviderButton {
    icon: IconDefinition
    label: string
  }

  defineProps<ProviderButton>()
</script>

<template>
  <AppButton class="provider__list--button">
    <FontAwesomeIcon
      :icon="icon"
      class="provider__list--button-icon"
    />
    {{ label }}
  </AppButton>
</template>
