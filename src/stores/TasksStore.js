import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = reactive([]);

  function addTask(task) {
    tasks.push(task);
  }

  return { tasks, addTask };
});
