<template>
  <div px-4>
    <div class="flex justify-end items-center px-6 py-2 gap-2 text-2xl">
      <div
        cursor-pointer
        select-none
        :class="
          sortFlag === 'asc'
            ? 'i-carbon-sort-descending'
            : 'i-carbon-sort-ascending'
        "
        @click="handleSort"
      ></div>
    </div>
    <div class="episode grid gap-2 justify-center">
      <episode-item v-for="info of episode" :key="info.id" :info="info" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAllEpisode } from '../utils/episode'

let sortFlag = $ref<'asc' | 'desc'>('desc')
const rawEpisode = Object.values(getAllEpisode())

const episode = $computed(() =>
  [...rawEpisode].sort((a, b) => {
    if (sortFlag === 'asc') {
      return a.date.getDate() - b.date.getDate()
    } else {
      return b.date.getDate() - a.date.getDate()
    }
  })
)

const handleSort = () => {
  sortFlag = sortFlag === 'asc' ? 'desc' : 'asc'
}
</script>

<style lang="scss">
.episode {
  grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
}
</style>
