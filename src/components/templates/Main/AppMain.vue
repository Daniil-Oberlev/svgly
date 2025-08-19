<script setup lang="ts">
  import AppIcon from '@/components/shared/Icon/AppIcon.vue'

  import { useIconSettings } from '@/composables/useIconSettings'
  import { useIconRemote } from '@/composables/useIconRemote'

  const { state } = useIconSettings()
  const { currentIconRaw } = useIconRemote()
</script>

<template>
  <main class="main">
    <div class="icon-container">
      <AppIcon
        :raw="currentIconRaw"
        :width="state.size"
        :height="state.size"
        :stroke-width="state.strokeWidth"
        :rotate="state.rotate"
        :fill-opacity="state.fillOpacity"
      />
    </div>
  </main>
</template>

<style scoped lang="css">
  .main {
    width: 100%;
    height: calc(100vh - 2.5rem - 2px - 2rem);
    background-color: var(--background-tertiary);
    background-image:
      linear-gradient(var(--border-color) 1px, transparent 1px),
      linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
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
