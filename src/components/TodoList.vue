<template>
  <AddColumnForm />
  <n-scrollbar x-scrollable>
    <div class="columns-wrapper">
      <div v-for="(column, index) in dashboard.columns" :key="column.name">
        <BoardColumn :index="index" :column="column" />
      </div>
    </div>
  </n-scrollbar>
</template>

<script setup>
import { NScrollbar } from "naive-ui";
import { onMounted } from "vue";

import { useTasksStore } from "../stores/TasksStore";
import AddColumnForm from "./AddColumnForm.vue";
import BoardColumn from "./BoardColumn/BoardColumn.vue";

const { loadDashboard, dashboard } = useTasksStore();

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
</style>
