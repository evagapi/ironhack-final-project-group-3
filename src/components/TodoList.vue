<template>
  <div class="main-full-height pt-7">
    <div v-if="isLoading" class="columns-wrapper">
      <n-skeleton :width="350" :sharp="false" :height="450" />
      <n-skeleton :width="350" :sharp="false" :height="450" />
      <n-skeleton :width="350" :sharp="false" :height="450" />
    </div>

    <n-scrollbar v-else x-scrollable>
      <div class="columns-wrapper">
        <div v-for="(column, index) in dashboard.columns" :key="column.name">
          <BoardColumn :index="index" :column="column" />
        </div>
        <AddColumnForm />
      </div>
    </n-scrollbar>
  </div>
</template>

<script setup>
import { NScrollbar, NSkeleton, useLoadingBar } from "naive-ui";
import { onMounted, ref } from "vue";

import { useTasksStore } from "../stores/TasksStore";
import AddColumnForm from "./AddColumnForm.vue";
import BoardColumn from "./BoardColumn/BoardColumn.vue";

const loadingBar = useLoadingBar();
const { loadDashboard, dashboard } = useTasksStore();
const isLoading = ref(true);

onMounted(async () => {
  loadingBar.start();
  await loadDashboard();
  isLoading.value = false;
  loadingBar.finish();
});
</script>

<style scoped>
.columns-wrapper {
  display: flex;
  align-items: stretch;
  gap: 2em;
  margin: 0 1em;
}
</style>
