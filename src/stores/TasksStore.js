import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  const todoTasks = reactive([]);

  const doneTasks = reactive([]);

  function addTask(task) {
    if (task.column === "todo") {
      todoTasks.push(task);
    } else if (task.column === "done") {
      doneTasks.push(task);
    }
  }

  function getTaskByColumn(column) {
    return column === "todo" ? todoTasks : doneTasks;
  }

  return { todoTasks, doneTasks, addTask, getTaskByColumn };
});
