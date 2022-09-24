import { defineStore } from "pinia";
import { reactive } from "vue";

import { supabase } from "../supabase";

export const useTasksStore = defineStore("tasks", () => {
  const todoTasks = reactive([]);

  const doneTasks = reactive([]);

  async function loadTasks() {
    const { data, error } = await supabase
      .from("column")
      .select("*")
      .eq("name", "todo")
      .single();
    if (error) throw error;
    todoTasks.length = 0;
    for (let task of data.tasks) {
      todoTasks.push(task);
    }
  }

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

  return { todoTasks, doneTasks, loadTasks, addTask, getTaskByColumn };
});
