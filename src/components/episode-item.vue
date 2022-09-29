<template>
  <div class="border-box border-dashed px-4 py-6 pb-16" flex="~ col gap-4">
    <div class="flex justify-between text-sm text-dark-100 font-500 font-mono">
      <div class="">{{ info.id }}</div>
      <div class="flex items-center gap-1">
        <div class="i-carbon-moon"></div>
        <span>{{ date }}</span>
      </div>
    </div>
    <router-link
      flex
      justify-center
      text-lg
      mt-3
      cursor-pointer
      class="hover:hover-text"
      :to="{ name: `Episode/${info.id}` }"
    >
      <span>{{ info.title }}</span>
    </router-link>
    <episode-meta :info="info"></episode-meta>
    <div class="desc-text">
      <span>
        {{ info.description }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import type { Episode } from '../utils/episode'

const { info } = defineProps<{
  info: Episode
}>()
const date = $computed(() => format(info.date, 'yyyy-MM-dd'))
</script>

<style scoped></style>
