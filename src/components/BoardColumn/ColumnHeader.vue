<template>
  <div
    class="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white font-semibold px-6 py-3 rounded-tr-lg rounded-tl-lg flex justify-between"
  >
    <span
      :class="index === 0 ? 'invisible' : 'cursor-pointer text-xl'"
      @click="moveColumnToLeft(index)"
      >⬅️</span
    >
    <h3>{{ column.name }}</h3>
    <span
      :class="
        index === dashboard.columns.length - 1
          ? 'invisible'
          : 'cursor-pointer text-xl'
      "
      @click="moveColumnToRight(index)"
      >➡️</span
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import { useTasksStore } from "../../stores/TasksStore";

// This looks like a 🐛 i have used vue-eslint-parser and still complains about it
// ignoring for now
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  index: { type: Number, required: true },
  column: { type: Object, required: true },
});

const { dashboard, moveColumnToLeft, moveColumnToRight } = useTasksStore();
</script>
