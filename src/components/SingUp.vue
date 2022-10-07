<template>
  <div class="p-4">
    <n-form
      ref="formRef"
      inline
      :label-width="80"
      :model="formValue"
      :rules="rules"
      size="medium"
      @submit="handleSubmit"
    >
      <n-form-item path="email">
        <n-input
          v-model:value="formValue.email"
          placeholder="Enter your email"
        />
      </n-form-item>
      <n-form-item path="password">
        <n-input
          v-model:value="formValue.password"
          placeholder="Create a password"
        />
      </n-form-item>
      <n-form-item>
        <n-button class="bg-white text-black" attr-type="submit">
          Sing Up
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { NForm, NFormItem, NInput, NButton, useMessage } from "naive-ui";

import { useUserStore } from "../stores/UserStore";

const { singUp } = useUserStore();

const message = useMessage();
const formValue = reactive({});
const formRef = ref(null);

const rules = {
  email: {
    required: true,
    message: "Please enter your email",
    trigger: ["input"],
  },
  password: {
    required: true,
    message: "Please create a strong password",
    trigger: ["input"],
  },
};

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(() => {
      singUp(formValue.email, formValue.password);
      formValue.email = "";
      formValue.password = "";
      message.success("All done! Check your inbox to validate your account");
    })
    .catch(() => {
      message.error("");
    });
}
</script>
