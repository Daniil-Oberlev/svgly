<script setup lang="ts">
  import { ref } from 'vue'

  import { IconForm } from './icons'

  import AppInput from '@/components/shared/Input/AppInput.vue'

  const sizeValue = ref(100)
  const rotateValue = ref(0)
  const borderWidthValue = ref(2)
  const fillOpacityValue = ref(0)
</script>

<template>
  <IconForm />
  <AppInput
    v-model:current-value="sizeValue"
    :min-value="100"
    :max-value="600"
    :step="1"
    name="Размер"
    unit="px"
  />
  <AppInput
    v-model:current-value="rotateValue"
    :min-value="-180"
    :max-value="180"
    :step="1"
    name="Поворот"
    unit="°"
  />
  <AppInput
    v-model:current-value="borderWidthValue"
    :min-value="1"
    :max-value="4"
    :step="0.01"
    name="Толщина иконки"
    unit="px"
  />
  <AppInput
    v-model:current-value="fillOpacityValue"
    :min-value="0"
    :max-value="100"
    :step="1"
    name="Прозрачность"
    unit="%"
  />
</template>
