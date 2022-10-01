<template>
  <draggable
    class="column bg-slate-300 p-4 w-80"
    :list="column.tasks"
    group="columns"
    item-key="title"
    @change="onChange"
  >
    <template #item="{ element }">
      <TaskCard :task="element"></TaskCard>
    </template>
  </draggable>
</template>

<script setup>
import { defineProps } from "vue";
import draggable from "vuedraggable";

import { useTasksStore } from "../../stores/TasksStore";
import TaskCard from "./TaskCard.vue";

// This looks like a 🐛 i have used vue-eslint-parser and still complains about it
// ignoring for now
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  column: { type: Object, required: true },
});

const { updateDashboard } = useTasksStore();

function onChange() {
  updateDashboard();
}
</script>

<style scoped>
.column {
  min-height: 300px;
}
</style>
