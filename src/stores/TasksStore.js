import { defineStore } from "pinia";
import { reactive } from "vue";

import { supabase } from "../supabase";

export const useTasksStore = defineStore("tasks", () => {
  const todoTasks = reactive([]);

  const doneTasks = reactive([]);

  async function loadTodoTasks() {
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

  async function loadDoneTasks() {
    const { data, error } = await supabase
      .from("column")
      .select("*")
      .eq("name", "done")
      .single();
    if (error) throw error;

    doneTasks.length = 0;
    for (let task of data.tasks) {
      doneTasks.push(task);
    }
  }

  async function loadTasks() {
    return await Promise.all([loadTodoTasks(), loadDoneTasks()]);
  }

  async function updateTodoTasks() {
    const { error } = await supabase
      .from("column")
      .update({ tasks: todoTasks })
      .match({ name: "todo" });
    if (error) throw error;
  }

  async function updateDoneTasks() {
    const { error } = await supabase
      .from("column")
      .update({ tasks: doneTasks })
      .match({ name: "done" });
    if (error) throw error;
  }

  async function addTask(column, task) {
    if (column === "todo") {
      todoTasks.push(task);
      updateTodoTasks();
    } else if (column === "done") {
      doneTasks.push(task);
      updateDoneTasks();
    }
  }

  function persistColumns() {
    updateTodoTasks();
    updateDoneTasks();
  }

  function getTaskByColumn(column) {
    return column === "todo" ? todoTasks : doneTasks;
  }

  return {
    todoTasks,
    doneTasks,
    loadTasks,
    addTask,
    getTaskByColumn,
    persistColumns,
  };
});
