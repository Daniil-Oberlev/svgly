<script setup lang="ts">
  type HeadingTag = 'h1'

  interface HeadingProperties {
    tag: HeadingTag
  }

  defineProps<HeadingProperties>()
</script>

<template>
  <component
    :is="tag"
    class="typography-h1"
  >
    <slot />
  </component>
</template>

<style lang="css" scoped>
  .typography-h1 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2;
  }
</style>
