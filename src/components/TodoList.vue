<template>
  <AddTaskForm />
  <n-scrollbar x-scrollable>
    <div class="columns-wrapper">
      <div v-for="column in columns" :key="column.value">
        <h3>{{ column.value }}</h3>
        <draggable
          class="column"
          :list="getTaskByColumn(column.value)"
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

const { getTaskByColumn, loadTasks, persistColumns } = useTasksStore();

const columns = [
  {
    label: "todo",
    value: "todo",
  },
  {
    label: "done",
    value: "done",
  },
];

function onChange() {
  persistColumns();
}

onMounted(() => {
  loadTasks();
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
