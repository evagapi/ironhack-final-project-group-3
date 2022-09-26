<template>
  <AddTaskForm />
  <n-scrollbar x-scrollable>
    <div class="columns-wrapper">
      <div v-for="column in dashboard.columns" :key="column.name">
        <h3>{{ column.name }}</h3>
        <draggable
          class="column"
          :list="column.tasks"
          group="columns"
          item-key="title"
          @change="onChange"
        >
          <template #item="{ element }">
            <div>{{ element.title }}</div>
          </template>
        </draggable>
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

const { loadDashboard, dashboard, updateDashboard } = useTasksStore();

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
  gap: 3em;
  margin: 0 2em;
}
.column {
  min-height: 300px;
  width: 140px;
  background-color: #f2f4f5;
}
</style>
