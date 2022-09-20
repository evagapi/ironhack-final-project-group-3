import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = reactive([]);

  function addTask(task) {
    tasks.push(task);
  }

  function getTaskByGroup(group) {
    return tasks.filter((task) => task.group === group);
  }

  return { tasks, addTask, getTaskByGroup };
});
