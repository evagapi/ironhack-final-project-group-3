import { defineStore } from "pinia";
import { reactive } from "vue";

import { supabase } from "../supabase";

export const useTasksStore = defineStore("tasks", () => {
  let dashboard = reactive({});

  async function loadDashboard() {
    const { data, error } = await supabase
      .from("boards")
      .select("*")
      .eq("name", "Learning List") //FIXME: Un-hardcode this once we can create several boards / have users
      .single();
    if (error) throw error;

    Object.assign(dashboard, data);
  }

  async function addTask(columnIndex, title) {
    const task = { title };

    dashboard.columns[columnIndex].tasks.push(task);

    await updateDashboard();
  }

  async function updateDashboard() {
    const { error } = await supabase
      .from("boards")
      .update({ columns: dashboard.columns })
      .eq("name", "Learning List");
    if (error) throw error;
  }

  async function addColumn(columnName) {
    const column = { name: columnName, tasks: [] };

    dashboard.columns.push(column);

    await updateDashboard();
  }

  async function moveColumnToLeft(index) {
    let columnsArray = dashboard.columns;
    let aux = columnsArray[index - 1];
    columnsArray[index - 1] = columnsArray[index];
    columnsArray[index] = aux;

    await updateDashboard();
  }

  async function moveColumnToRight(index) {
    let columnsArray = dashboard.columns;
    let aux = columnsArray[index + 1];
    columnsArray[index + 1] = columnsArray[index];
    columnsArray[index] = aux;

    await updateDashboard();
  }

  async function removeTask(columnIndex, taskIndex) {
    dashboard.columns[columnIndex].tasks.splice(taskIndex, 1);
    await updateDashboard();
  }

  async function removeColumn(columnIndex) {
    dashboard.columns.splice(columnIndex, 1);
    await updateDashboard();
  }

  return {
    loadDashboard,
    dashboard,
    addTask,
    addColumn,
    updateDashboard,
    moveColumnToLeft,
    moveColumnToRight,
    removeTask,
    removeColumn,
  };
});
