<template>
  <div class="form-wrapper">
    <NForm
      ref="formRef"
      inline
      :label-width="80"
      :model="formValue"
      :rules="rules"
      size="large"
      @submit="handleSubmit"
    >
      <n-form-item path="task">
        <n-input v-model:value="formValue.task" placeholder="Task" />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="submit"> Add </n-button>
      </n-form-item>
    </NForm>

    <p v-if="tasks.length > 0">To do</p>
    <ul class="tasks-list">
      <li v-for="task in tasks" :key="task.title">
        <n-checkbox v-model:checked="task.isDone">
          {{ task.title }}
        </n-checkbox>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTasksStore } from "../stores/TasksStore";
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  NCheckbox,
  useMessage,
} from "naive-ui";
import { reactive, ref } from "vue";

const message = useMessage();
const formValue = reactive({
  task: "",
});

const formRef = ref(null);

const rules = {
  task: {
    required: true,
    message: "Please enter your task",
    trigger: ["input"],
  },
};

const { tasks, addTask } = useTasksStore();

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(() => {
      addTask({
        title: formValue.task,
        isDone: false,
      });
      formValue.task = "";
      message.success("New task added");
    })
    .catch((errors) => {
      console.log(errors);
      message.error("A task must not be empty");
    });
}
</script>

<style scoped>
.form-wrapper {
  padding: 1rem;
  margin: auto;
}
.tasks-list {
  list-style-type: none;
}
</style>
