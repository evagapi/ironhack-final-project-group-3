<template>
  <div class="form-wrapper bg-slate-400">
    <NForm
      ref="formRef"
      inline
      :label-width="80"
      :model="formValue"
      :rules="rules"
      size="small"
      class=""
      @submit="handleSubmit"
    >
      <n-form-item path="task">
        <n-input v-model:value="formValue.task" placeholder="Task" />
      </n-form-item>
      <n-form-item>
        <n-button
          :disabled="!isValid"
          type="primary"
          class="bg-white text-black"
          attr-type="submit"
        >
          Add
        </n-button>
      </n-form-item>
      <n-form-item>
        <n-button
          type="error"
          title="Delete column"
          @click="removeColumn(index)"
          >🗑️</n-button
        >
      </n-form-item>
    </NForm>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps } from "vue";
import { NForm, NFormItem, NInput, NButton, useMessage } from "naive-ui";

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
      if (!value || value.length <= 3) {
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
    .catch((errors) => {
      console.log(errors);
      message.error("A task must not be empty");
    });
}
</script>

<style scoped>
.form-wrapper {
  padding: 0 1rem;
  margin: auto;
}
</style>
