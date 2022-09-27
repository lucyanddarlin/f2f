<template>
  <AppHeader />
  <router-view />
</template>

<script lang="ts">
import AppHeader from './components/app-header.vue'
export default {
  components: { AppHeader },
}
</script>

<style scoped></style>
