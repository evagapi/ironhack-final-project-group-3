<template>
  <div class="cursor-grab bg-white rounded p-2 mb-4">
    {{ task.title }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// This looks like a 🐛 i have used vue-eslint-parser and still complains about it
// ignoring for now
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  task: { type: Object, required: true },
});
</script>
