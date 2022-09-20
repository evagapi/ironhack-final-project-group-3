<template>
  <NForm
    ref="form"
    inline
    :label-width="80"
    :model="formValue"
    :rules="rules"
    size="large"
    class="task-input"
    @submit="handleSubmit"
  >
    <n-form-item path="task">
      <n-input v-model:value="formValue.task" placeholder="Task" />
    </n-form-item>
    <n-form-item>
      <n-button attr-type="submit"> Add </n-button>
    </n-form-item>
  </NForm>

  <ul class="tasks-list">
    <li v-for="task in TasksStore.tasks" :key="task.title">
      <n-checkbox v-model:checked="task.isDone"> {{ task.title }} </n-checkbox>
    </li>
  </ul>
</template>

<script>
import { useTasksStore } from "../stores/TasksStore";
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  NCheckbox,
  useMessage,
} from "naive-ui";
export default {
  components: {
    NForm,
    NFormItem,
    NInput,
    NButton,
    NCheckbox,
  },
  setup() {
    const message = useMessage();
    return { message };
  },
  data() {
    return {
      formValue: {
        task: "",
      },
      rules: {
        task: {
          required: true,
          message: "Please enter your task",
          trigger: ["input"],
        },
      },
      TasksStore: useTasksStore(),
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$refs.form
        .validate()
        .then(() => {
          this.TasksStore.tasks.push({
            title: this.formValue.task,
            isDone: false,
          });
          this.formValue.task = "";
          this.message.success("New task added");
        })
        .catch((errors) => {
          console.log(errors);
          this.message.error("A task must not be empty");
        });
    },
  },
};
</script>

<style scoped>
.task-input {
  padding: 1rem;
}
.tasks-list {
  list-style-type: none;
}
</style>
