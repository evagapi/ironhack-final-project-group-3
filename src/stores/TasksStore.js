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

  async function addTask(column, task) {
    if (column === "todo") {
      todoTasks.push(task);
      const { error } = await supabase
        .from("column")
        .update({ tasks: todoTasks })
        .match({ name: column });
      if (error) throw error;
    } else if (column === "done") {
      doneTasks.push(task);
      const { error } = await supabase
        .from("column")
        .update({ tasks: doneTasks })
        .match({ name: column });
      if (error) throw error;
    }
  }

  function getTaskByColumn(column) {
    return column === "todo" ? todoTasks : doneTasks;
  }

  return { todoTasks, doneTasks, loadTasks, addTask, getTaskByColumn };
});
