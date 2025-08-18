<script setup lang="ts">
  import { ref } from 'vue'

  import IconModal from '@/components/widgets/Modals/IconModal/IconModal.vue'

  const iconName = ref('align-end-vertical')
</script>

<template>
  <div class="icon__form">
    <label>Иконка</label>
    <div class="icon__form-button-component">
      <IconModal v-model="iconName" />
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
</style>
