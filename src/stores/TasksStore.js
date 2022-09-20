import { defineStore } from "pinia";

export const useTasksStore = defineStore("TasksStore", {
  state: () => {
    return {
      tasks: [],
    };
  },
});
