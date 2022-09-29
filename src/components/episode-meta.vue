<template>
  <div flex="~ row gap-2 wrap" justify-center items-center>
    <person-list v-if="info.hosts?.length" :persons="info.hosts">
      <template #icon>
        <div class="i-carbon-user-speaker"></div>
      </template>
    </person-list>

    <person-list v-if="info.guests?.length" :persons="info.hosts">
      <template #icon>
        <div class="i-carbon-user"></div>
      </template>
    </person-list>
  </div>
</template>

<script setup lang="ts">
import type { Episode } from '../utils/episode'

defineProps<{ info: Episode }>()
</script>

<style scoped></style>
