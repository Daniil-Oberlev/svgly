<script setup lang="ts">
  import AppIcon from '@/components/shared/Icon/AppIcon.vue'

  import { useIcon } from '@/composables/useIcon'

  const { currentIconName } = useIcon()
</script>

<template>
  <div class="main">
    <div class="icon-container">
      <AppIcon
        :name="currentIconName"
        :size="100"
      />
    </div>
  </div>
</template>

<style scoped lang="css">
  .main {
    width: 100%;
    height: calc(100vh - 2.5rem - 2px - 2rem);
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 10px 10px;
    background-position: 0 0;
    position: relative;
  }

  .icon-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
