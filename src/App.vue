<script setup lang="ts"></script>

<template>
  <AppHeader />
  <router-view />
</template>

<style scoped></style>
<script>
import AppHeader from './components/app-header.vue'
export default {
  components: { AppHeader },
}
</script>
