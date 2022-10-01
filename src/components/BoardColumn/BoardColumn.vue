<template>
  <ColumnHeader :index="index" :column="column" />
  <TaskList :index="index" :column="column" />
  <AddTaskForm :index="index" />
</template>

<script setup>
import { defineProps } from "vue";

import TaskList from "./TaskList.vue";
import AddTaskForm from "./AddTaskForm.vue";
import ColumnHeader from "./ColumnHeader.vue";

// This looks like a 🐛 i have used vue-eslint-parser and still complains about it
// ignoring for now
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  index: { type: Number, required: true },
  column: { type: Object, required: true },
});
</script>
