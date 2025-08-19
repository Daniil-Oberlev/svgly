<script setup lang="ts">
  import IconModal from '@/components/widgets/Modals/IconModal/IconModal.vue'
  import AppInput from '@/components/shared/Input/AppInput.vue'

  import { useIconSettings } from '@/composables/useIconSettings'
  import { useIconRemote } from '@/composables/useIconRemote'

  const { state } = useIconSettings()
  const { currentIconRaw } = useIconRemote()
</script>

<template>
  <div class="icon__form">
    <label>Иконка</label>
    <div class="icon__form-button-component">
      <IconModal v-model="currentIconRaw" />
    </div>
  </div>
  <AppInput
    v-model:current-value="state.size"
    :min-value="100"
    :max-value="600"
    :step="1"
    name="Размер"
    unit="px"
  />
  <AppInput
    v-model:current-value="state.rotate"
    :min-value="-180"
    :max-value="180"
    :step="1"
    name="Поворот"
    unit="°"
  />
  <AppInput
    v-model:current-value="state.strokeWidth"
    :min-value="1"
    :max-value="4"
    :step="0.01"
    name="Толщина иконки"
    unit="px"
  />
  <AppInput
    v-model:current-value="state.fillOpacity"
    :min-value="0"
    :max-value="100"
    :step="1"
    name="Прозрачность"
    unit="%"
  />
</template>

<style lang="css" scoped>
  .icon__form {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .icon__form-button-component {
    display: grid;
    grid-template-columns: min-content;
    align-items: center;
    gap: 0.5rem;
  }

  .icon__form-button {
    height: 3rem;
    width: 3rem;
    padding: 0.5rem;
  }
</style>
