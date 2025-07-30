<script setup lang="ts">
  type ButtonVariant = 'primary' | 'secondary'

  interface ButtonProperties {
    variant?: ButtonVariant
    disabled?: boolean
  }

  withDefaults(defineProps<ButtonProperties>(), {
    variant: 'primary',
    disabled: false
  })
</script>

<template>
  <button
    class="button"
    :class="`button--${variant}`"
    :disabled="disabled"
    type="button"
  >
    <slot />
  </button>
</template>

<style scoped>
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
    cursor: pointer;
    border-radius: calc(var(--radius) - 2px);
    border: 1px solid transparent;
    font-family: inherit;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    appearance: none;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease,
      transform 0.1s ease;
  }

  /* Primary button */
  .button--primary {
    background-color: hsl(var(--primary-hue, 0) 0% 95%); /* Светлый фон в светлой теме */
    color: hsl(var(--primary-hue, 0) 0% 10%); /* Темный текст */
    border-color: hsl(var(--primary-hue, 0) 0% 80%);
  }

  .theme-dark .button--primary {
    background-color: hsl(var(--primary-hue, 0) 0% 10%); /* Темный фон в темной теме */
    color: hsl(var(--primary-hue, 0) 0% 95%); /* Светлый текст */
    border-color: hsl(var(--primary-hue, 0) 0% 20%);
  }

  .button--primary:hover:not(:disabled) {
    background-color: hsl(var(--primary-hue, 0) 0% 85%); /* Осветление/затемнение для hover */
    border-color: hsl(var(--primary-hue, 0) 0% 70%);
  }

  .theme-dark .button--primary:hover:not(:disabled) {
    background-color: hsl(var(--primary-hue, 0) 0% 20%); /* Легкое осветление для темной темы */
    border-color: hsl(var(--primary-hue, 0) 0% 30%);
  }

  /* Secondary button */
  .button--secondary {
    background-color: hsl(var(--secondary-hue, 0) 0% 10%); /* Темный фон в светлой теме */
    color: hsl(var(--primary-hue, 0) 0% 95%); /* Светлый текст */
    border-color: hsl(var(--primary-hue, 0) 0% 80%);
  }

  .theme-dark .button--secondary {
    background-color: hsl(var(--secondary-hue, 0) 0% 95%); /* Светлый фон в темной теме */
    color: hsl(var(--primary-hue, 0) 0% 10%); /* Темный текст */
    border-color: hsl(var(--primary-hue, 0) 0% 20%);
  }

  .button--secondary:hover:not(:disabled) {
    background-color: hsl(var(--secondary-hue, 0) 0% 20%); /* Осветление для светлой темы */
    border-color: hsl(var(--primary-hue, 0) 0% 70%);
  }

  .theme-dark .button--secondary:hover:not(:disabled) {
    background-color: hsl(var(--secondary-hue, 0) 0% 85%); /* Затемнение для темной темы */
    border-color: hsl(var(--primary-hue, 0) 0% 30%);
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: 2px solid hsl(var(--primary-hue, 0) 0% 50%);
    outline-offset: 2px;
  }

  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
