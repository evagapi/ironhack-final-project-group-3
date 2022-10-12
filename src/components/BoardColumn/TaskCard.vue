<!-- eslint-disable max-lines -->
<template>
  <div>
    <div class="cursor-grab bg-white rounded p-2 mb-4 flex justify-between">
      <p>{{ task.title }}</p>
      <div class="flex gap-2">
        <button @click="showModal = true">✏</button>
        <n-popconfirm @positive-click="handlePositiveClick(columnIndex, index)">
          <template #trigger>
            <button>🧹</button>
          </template>
          Do you want to delete this task?
        </n-popconfirm>
      </div>
    </div>
    <n-modal v-model:show="showModal">
      <div class="bg-slate-100 p-10">
        <NForm
          ref="formRef"
          inline
          :label-width="80"
          :model="formValue"
          :rules="rules"
          size="large"
          @submit.prevent="handleSubmit"
        >
          <n-form-item path="task">
            <n-input
              v-model:value="formValue.task"
              class="w-80"
              placeholder="Task"
            />
          </n-form-item>
          <n-form-item>
            <div class="flex gap-2">
              <n-button :disabled="!isValid" type="primary" attr-type="submit">
                Save
              </n-button>
              <n-button
                class="bg-white text-black"
                type="warning"
                @click="showModal = false"
              >
                Discard
              </n-button>
            </div>
          </n-form-item>
        </NForm>
      </div>
    </n-modal>
  </div>
</template>

<script setup>
import { defineProps, ref, reactive } from "vue";
import {
  NModal,
  NForm,
  NFormItem,
  NInput,
  NButton,
  useMessage,
  NPopconfirm,
} from "naive-ui";

import { useTasksStore } from "../../stores/TasksStore";

const { removeTask, editTask } = useTasksStore();

const isValid = ref(false);

const props = defineProps({
  index: { type: Number, required: true },
  task: { type: Object, required: true },
  columnIndex: { type: Number, required: true },
});

let showModal = ref(false);
const message = useMessage();

const formValue = reactive({
  task: props.task.title,
});

const formRef = ref(null);

const rules = {
  task: {
    required: true,
    validator(value) {
      if (!value || value.length < 3) {
        isValid.value = false;
        return new Error("A task must have more than 3 letters.");
      }
      isValid.value = true;
      return true;
    },
    trigger: ["blur"],
  },
};

function handleSubmit() {
  formRef.value
    ?.validate()
    .then(() => {
      showModal.value = false;
      editTask(props.columnIndex, props.index, formValue.task);
      message.success("Save edited task");
    })
    .catch(() => {
      // eslint-disable-next-line max-lines
      message.error("A task must not be empty");
    });
}

function handlePositiveClick(columnIndex, index) {
  removeTask(columnIndex, index);
  message.success("Task deleted successfully.");
}
</script>
