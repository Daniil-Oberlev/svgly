<script setup lang="ts">
  import { ref } from 'vue'
  import AppButton from '@/components/shared/Buttons/AppButton.vue'

  import AppIcon from '@/components/shared/Icon/AppIcon.vue'

  const iconName = ref('align-end-vertical')
</script>

<template>
  <div class="icon__form">
    <label>Иконка</label>
    <div class="icon__form-button-component">
      <AppButton class="icon__form-button">
        <AppIcon
          class="icon__form-button-icon"
          :name="iconName"
        />
      </AppButton>
      <span>{{ iconName }}</span>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .icon__form {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .icon__form-button-component {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    gap: 0.5rem;
  }

  .icon__form-button {
    height: 3rem;
    width: 3rem;
    padding: 0.5rem;
  }

  .icon__form-button-icon {
    width: 100%;
    height: 100%;
  }
</style>
