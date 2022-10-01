<template>
  <AddColumnForm />
  <n-scrollbar x-scrollable>
    <div class="columns-wrapper">
      <div v-for="(column, index) in dashboard.columns" :key="column.name">
        <div class="flex justify-between pb-4">
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

        <draggable
          class="column bg-slate-300 p-4 w-80"
          :list="column.tasks"
          group="columns"
          item-key="title"
          @change="onChange"
        >
          <template #item="{ element }">
            <div class="cursor-grab bg-white rounded p-2 mb-4">
              {{ element.title }}
            </div>
          </template>
        </draggable>
        <AddTaskForm :index="index" />
      </div>
    </div>
  </n-scrollbar>
</template>

<script setup>
import { NScrollbar } from "naive-ui";
import { onMounted } from "vue";
import draggable from "vuedraggable";

import { useTasksStore } from "../stores/TasksStore";
import AddTaskForm from "./AddTaskForm.vue";
import AddColumnForm from "./AddColumnForm.vue";

const {
  loadDashboard,
  dashboard,
  updateDashboard,
  moveColumnToLeft,
  moveColumnToRight,
} = useTasksStore();

function onChange() {
  updateDashboard();
}

onMounted(() => {
  loadDashboard();
});
</script>

<style scoped>
.columns-wrapper {
  display: flex;
  align-items: center;
  gap: 2em;
  margin: 0 1em;
}
.column {
  min-height: 300px;
}
</style>
