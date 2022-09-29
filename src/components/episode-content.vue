<template>
  <div v-if="episodeContent" container mx-auto px-4 mt-5>
    <div mb-5>
      <h1
        text-center
        text-2xl
        font-bold
        mb-3
        v-html="episodeContent?.title"
      ></h1>
      <episode-meta :info="episodeContent" justify-center></episode-meta>
    </div>
    <component :is="episodeContent!.default" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getAllEpisode } from '../utils/episode'

const { id } = defineProps<{ id: string }>()

const episodes = getAllEpisode()
const episodeContent = computed(() =>
  episodes.find((episode) => id === episode.id)
)
</script>

<style lang="scss" scoped></style>
