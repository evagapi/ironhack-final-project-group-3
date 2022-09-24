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
  </div>
  <n-scrollbar x-scrollable>
    <div class="columns-wrapper">
      <div v-for="column in columns" :key="column.value">
        <h3>{{ column.value }}</h3>
        <draggable
          class="column"
          :list="getTaskByColumn(column.value)"
          group="columns"
          item-key="title"
          @change="log"
        >
          <template #item="{ element }">
            <div class="list-group-item">{{ element.title }}</div>
          </template>
        </draggable>
      </div>
    </div>
  </n-scrollbar>
</template>

<script setup>
import { useTasksStore } from "../stores/TasksStore";
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  NScrollbar,
  useMessage,
} from "naive-ui";
import { reactive, ref, onMounted } from "vue";
import draggable from "vuedraggable";

const { addTask, getTaskByColumn, loadTasks, persistColumns } = useTasksStore();

const message = useMessage();
const formValue = reactive({
  task: "",
});

const formRef = ref(null);

const columns = [
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

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(() => {
      addTask("todo", {
        title: formValue.task,
      });
      formValue.task = "";
      message.success("New task added");
    })
    .catch((errors) => {
      console.log(errors);
      message.error("A task must not be empty");
    });
}

function log() {
  persistColumns();
}

onMounted(() => {
  loadTasks();
});
</script>

<style scoped>
.form-wrapper {
  padding: 1rem;
  margin: auto;
}

.columns-wrapper {
  display: flex;
  gap: 3em;
  margin: 0 2em;
}
.column {
  min-height: 300px;
  width: 140px;
  background-color: #f2f4f5;
}
</style>
