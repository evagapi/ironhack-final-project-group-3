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

  async function addTask(title) {
    const task = { title };

    //FIXME: is this OK? Should we allow to add task to any column?
    dashboard.columns[0].tasks.push(task);

    await updateDashboard();
  }

  async function updateDashboard() {
    const { error } = await supabase
      .from("boards")
      .update({ columns: dashboard.columns })
      .eq("name", "Learning List");
    if (error) throw error;
  }

  return {
    loadDashboard,
    dashboard,
    addTask,
    updateDashboard,
  };
});
