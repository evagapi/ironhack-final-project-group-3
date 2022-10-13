<template>
  <div
    class="bg-slate-400 rounded-br-lg rounded-bl-lg m-auto px-4 pb-24 relative"
  >
    <NForm
      ref="formRef"
      inline
      :label-width="80"
      :model="formValue"
      :rules="rules"
      size="small"
      class="absolute"
      @submit="handleSubmit"
    >
      <n-form-item path="task" class="max-w-[150px]">
        <n-input v-model:value="formValue.task" placeholder="Task" />
      </n-form-item>
      <n-form-item>
        <n-button type="primary" :disabled="!isValid" attr-type="submit">
          Add
        </n-button>
      </n-form-item>
      <n-form-item>
        <n-popconfirm @positive-click="handlePositiveClick(index)">
          <template #trigger>
            <n-button type="error" title="Delete column">🗑️</n-button>
          </template>
          Do you want to delete this column?
        </n-popconfirm>
      </n-form-item>
    </NForm>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps } from "vue";
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  useMessage,
  NPopconfirm,
} from "naive-ui";

import { useTasksStore } from "../../stores/TasksStore";

const { addTask, removeColumn } = useTasksStore();

const message = useMessage();
const formValue = reactive({
  task: "",
});

const isValid = ref(false);

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
});

const formRef = ref(null);

const rules = {
  task: {
    required: true,
    validator(rule, value) {
      if (!value || value.length < 3) {
        isValid.value = false;
        return new Error("A task must have more than 3 letters.");
      }
      isValid.value = true;
      return true;
    },
    trigger: ["input"],
  },
};

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(() => {
      addTask(props.index, formValue.task);
      formValue.task = "";
      message.success("New task added");
    })
    .catch(() => {
      message.error("A task must not be empty");
    });
}

function handlePositiveClick(index) {
  removeColumn(index);
  message.success("Column deleted successfully.");
}
</script>
