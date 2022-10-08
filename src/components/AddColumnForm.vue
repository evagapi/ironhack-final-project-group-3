<template>
  <div
    class="cursor-pointer w-80 rounded-lg bg-white flex justify-center items-center gap-2 flex-col border-8 border-slate-300 hover:bg-slate-100"
    @click="showModal = true"
  >
    <div class="text-3xl font-bold text-center">
      <p class="text-6xl">+</p>
      <p>Add column</p>
    </div>
  </div>
  <n-modal v-model:show="showModal">
    <div class="form-wrapper bg-white">
      <NForm
        ref="formRef"
        inline
        :label-width="80"
        :model="formValue"
        :rules="rules"
        size="large"
        @submit="handleSubmit"
      >
        <n-form-item path="column">
          <n-input v-model:value="formValue.column" placeholder="Column" />
        </n-form-item>
        <n-form-item>
          <n-button attr-type="submit"> Add </n-button>
        </n-form-item>
      </NForm>
    </div>
  </n-modal>
</template>

<script setup>
import { reactive, ref } from "vue";
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  useMessage,
  NModal,
} from "naive-ui";

import { useTasksStore } from "../stores/TasksStore";

const showModal = ref(false);

const { dashboard, MAX_COLUMNS, addColumn } = useTasksStore();

const message = useMessage();
const formValue = reactive({
  column: "",
});

const formRef = ref(null);

const rules = {
  column: {
    required: true,
    message: "Please enter your column",
    trigger: ["input"],
  },
};

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(() => {
      if (dashboard.columns.length < MAX_COLUMNS) {
        addColumn(formValue.column);
        formValue.column = "";
        message.success("New column added");
        showModal.value = false;
      } else {
        formValue.column = "";
        message.error("Maximum of columns reached");
        showModal.value = false;
      }
    })
    .catch((errors) => {
      console.log(errors);
      message.error("A column must not be empty");
    });
}
</script>

<style scoped>
.form-wrapper {
  padding: 1rem;
  margin: auto;
}
</style>
