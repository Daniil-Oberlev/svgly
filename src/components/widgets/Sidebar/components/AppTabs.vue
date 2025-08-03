<script setup lang="ts">
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>

<template>
  <TabGroup>
    <TabList>
      <Tab>Icon</Tab>
      <Tab>Background</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
    </TabPanels>
  </TabGroup>
</template>
