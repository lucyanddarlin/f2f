<template>
  <div class="grid grid-flow-row grid-cols-3 sm:grid-cols-4">
    <episode-item v-for="(item, index) in 5" :key="index" />
    <!-- <episode-item /> -->
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
