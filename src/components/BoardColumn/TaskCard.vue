<template>
  <div>
    <div class="cursor-grab bg-white rounded p-2 mb-4 flex justify-between">
      <p>{{ task.title }}</p>
      <div class="flex gap-2">
        <button @click="showModal = true">✏</button>
        <button @click="removeTask(columnIndex, index)">🧹</button>
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
              <n-button
                class="bg-white text-black"
                type="primary"
                attr-type="submit"
              >
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
} from "naive-ui";

import { useTasksStore } from "../../stores/TasksStore";

const { removeTask, editTask } = useTasksStore();

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
    message: "Please enter your task",
    trigger: ["input"],
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
    .catch((errors) => {
      console.log(errors);
      message.error("A task must not be empty");
    });
}
</script>
