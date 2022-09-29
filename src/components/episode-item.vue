<template>
  <div class="border-box border-dashed px-4 py-6 pb-16">
    <div class="flex justify-between text-sm text-dark-100 font-500 font-mono">
      <div class="">{{ info.id }}</div>
      <div class="flex items-center gap-1">
        <div class="i-carbon-moon"></div>
        <span>{{ date }}</span>
      </div>
    </div>
    <div class="flex justify-center" @click="handleClickTitle">
      <span class="text-lg mt-3 cursor-pointer hover:hover-text">
        {{ info.title }}
      </span>
    </div>
    <div class="flex flex-center mt-3">
      <span class="label-wrap">
        <div class="i-carbon-user-speaker"></div>
        {{ info.hosts.join(',') }}
      </span>
      <span class="label-wrap">
        <div class="i-carbon-user-multiple"></div>
        {{ info.guests.join(',') }}
      </span>
    </div>
    <div class="mt-2 desc-text">
      <span>
        {{ info.description }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { useRouter } from 'vue-router'
import type { Episode } from '../utils/episode'

const router = useRouter()
const { info } = defineProps<{
  info: Episode
}>()
const date = $computed(() => format(info.date, 'yyyy-MM-dd'))

const handleClickTitle = () => {
  router.push({ path: `/episode/${info.id}` })
}
</script>

<style scoped></style>
