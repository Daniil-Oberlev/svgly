<script setup lang="ts">
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

  import { BackgroundTabMenu, IconTabMenu } from '@/components/templates/Sidebar/components'
</script>

<template>
  <TabGroup>
    <TabList class="tabs-list">
      <Tab
        v-slot="{ selected }"
        as="template"
      >
        <button :class="['tabs-trigger', { 'tabs-trigger--active': selected }]">Иконка</button>
      </Tab>
      <Tab
        v-slot="{ selected }"
        as="template"
      >
        <button :class="['tabs-trigger', { 'tabs-trigger--active': selected }]">Фон</button>
      </Tab>
    </TabList>
    <TabPanels class="tabs-content">
      <TabPanel class="tabs-panel"><IconTabMenu /></TabPanel>
      <TabPanel class="tabs-panel"><BackgroundTabMenu /></TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<style scoped lang="css">
  .tabs-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    height: 2.5rem;
    border-radius: var(--radius);
    background: var(--background-secondary);
    padding: 0.25rem;
    border: 1px solid var(--border-color);
  }

  .tabs-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: calc(var(--radius) - 2px);
    border: none;
    cursor: pointer;
    background: var(--background-secondary);
    color: var(--secondary-color);
    font-family: var(--main-font);
  }

  .tabs-trigger--active {
    background: var(--background-primary);
    color: var(--secondary-color);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
  }

  .tabs-trigger:not(.tabs-trigger--active) {
    opacity: 0.7;
  }

  .tabs-trigger:not(.tabs-trigger--active):hover {
    opacity: 1;
    background: var(--background-tertiary);
  }

  .tabs-trigger:focus-visible {
    outline: 2px solid var(--border-color);
    outline-offset: 2px;
  }

  .tabs-content {
    margin-top: 1rem;
  }

  .tabs-panel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 0;
    color: var(--secondary-color);
  }
</style>
