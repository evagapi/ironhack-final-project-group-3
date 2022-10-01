<template>
  <div class="cursor-grab bg-white rounded p-2 mb-4 flex justify-between">
    <p>{{ task.title }}</p>
    <button @click="removeTask(columnIndex, index)">🧹</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import { useTasksStore } from "../../stores/TasksStore";

const { removeTask } = useTasksStore();

// This looks like a 🐛 i have used vue-eslint-parser and still complains about it
// ignoring for now
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  index: { type: Number, required: true },
  task: { type: Object, required: true },
  columnIndex: { type: Number, required: true },
});
</script>
