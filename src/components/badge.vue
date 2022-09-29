<template>
  <span
    class="flex flex-row gap-1 justify-center items-center px-1.5 py-0.5 text-xs font-400 border-rounded"
    bg="[var(--brand-color)]"
    dark:bg="#3E6B27"
    text="[var(--text-color)]"
    transition
    style="transition-property: background-color"
  >
    <slot name="icon" />
    <slot />
  </span>
</template>

<script setup lang="ts"></script>

<style scoped></style>
