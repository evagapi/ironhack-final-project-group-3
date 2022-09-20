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

    <div v-for="group in groups" :key="group.value">
      <h2>{{ group.value }}</h2>
      <ul>
        <li
          v-for="task in getTaskByGroup(group.value)"
          :key="task.title"
          class="tasks-list"
        >
          {{ task.title }}
          <n-select v-model:value="task.group" :options="groups" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useTasksStore } from "../stores/TasksStore";
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  NSelect,
  useMessage,
} from "naive-ui";
import { reactive, ref } from "vue";

const message = useMessage();
const formValue = reactive({
  task: "",
});

const formRef = ref(null);

const groups = [
  {
    label: "todo",
    value: "todo",
  },
  {
    label: "done",
    value: "done",
  },
];

const rules = {
  task: {
    required: true,
    message: "Please enter your task",
    trigger: ["input"],
  },
};

const { addTask, getTaskByGroup } = useTasksStore();

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(() => {
      addTask({
        title: formValue.task,
        group: "todo",
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
