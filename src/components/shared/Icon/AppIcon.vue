<script setup lang="ts">
  interface IconProperties {
    name: string
    stroke?: string
    fill?: string
    size?: number | string
    strokeWidth?: number | string
    color?: string
  }

  defineProps<IconProperties>()
</script>

<template>
  <svg
    class="app-icon"
    :width="size"
    :height="size"
    :stroke-width="strokeWidth"
    :style="{ stroke, fill, color }"
  >
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
