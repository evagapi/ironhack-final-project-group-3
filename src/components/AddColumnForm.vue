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
      <n-form-item path="column">
        <n-input v-model:value="formValue.column" placeholder="Column" />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="submit"> Add </n-button>
      </n-form-item>
    </NForm>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { NForm, NFormItem, NInput, NButton, useMessage } from "naive-ui";

import { useTasksStore } from "../stores/TasksStore";

const { addColumn } = useTasksStore();

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
      addColumn(formValue.column);
      formValue.column = "";
      message.success("New column added");
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
