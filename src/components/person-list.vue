<template>
  <badge v-for="per in persons" :key="getPersonKey(per)">
    <template #icon><slot name="icon" /></template>
    <person :person="per"></person>
  </badge>
</template>

<script setup lang="ts">
import { getPersonKey } from '../utils/episode'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { Person } from '../utils/episode'

const { persons } = defineProps<{ persons: Person[] }>()
</script>

<style scoped></style>
