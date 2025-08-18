<script setup lang="ts">
  import { ref } from 'vue'

  type MeasurementUnit = 'px' | '%' | '°'

  interface InputProperties {
    name: string
    minValue: number
    currentValue: number
    maxValue: number
    step: number
    unit: MeasurementUnit
  }

  defineProps<InputProperties>()
  const emit = defineEmits(['update:currentValue'])

  const sliderReference = ref<HTMLInputElement>()

  const handleInput = (event: Event): void => {
    const value = Number((event.target as HTMLInputElement).value)
    emit('update:currentValue', value)
  }
</script>

<template>
  <div class="input">
    <label class="input__label">
      <span class="input__name">{{ name }}</span>
      <span class="input__value">{{ currentValue }}{{ unit }}</span>
    </label>
    <div class="input__slider-container">
      <input
        ref="sliderReference"
        :min="minValue"
        :max="maxValue"
        :step="step"
        :value="currentValue"
        type="range"
        class="input__range"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<style scoped lang="css">
  .input {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: var(--radius);
    background: var(--background-secondary);
    border: 1px solid var(--border-color);
  }

  .input__label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .input__name {
    color: var(--secondary-color);
  }

  .input__value {
    color: var(--secondary-color);
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
  }

  .input__slider-container {
    position: relative;
    padding: 0.5rem 0;
  }

  .input__range {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: var(--secondary-color);
    outline: none;
    cursor: pointer;
    appearance: none;
  }

  .input__range::-webkit-slider-thumb {
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--background-primary);
    cursor: pointer;
    border: 3px solid var(--secondary-color);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .input__range::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--background-primary);
    cursor: pointer;
    border: 3px solid var(--secondary-color);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .input__range::-moz-range-track {
    height: 6px;
    border-radius: 3px;
    background: var(--background-tertiary);
    border: none;
  }

  .input__range::-ms-track {
    height: 6px;
    border-radius: 3px;
    background: var(--background-tertiary);
    border: none;
  }

  .input__range::-ms-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--background-primary);
    cursor: pointer;
    border: 3px solid var(--secondary-color);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
