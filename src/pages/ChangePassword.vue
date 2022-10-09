<template>
  <AuthWrapper>
    <h1
      class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700"
    >
      Change your password
    </h1>
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="rules"
      size="large"
      class="w-80"
      @submit="handleSubmit"
    >
      <n-form-item path="password" label="Create a new password">
        <n-input
          v-model:value="formValue.password"
          type="password"
          :input-props="{ autocomplete: 'new-password' }"
          placeholder="Password"
        />
      </n-form-item>

      <n-form-item path="confirmation" label="Confirm your new password">
        <n-input
          v-model:value="formValue.confirmation"
          type="password"
          :input-props="{ autocomplete: 'new-password' }"
          placeholder="Repeat your password"
        />
      </n-form-item>

      <n-button
        class="flex w-full rounded-md text-sm font-medium mt-5"
        type="info"
        strong
        secondary
        attr-type="submit"
      >
        Confirm new password
      </n-button>
    </n-form>
  </AuthWrapper>
</template>

<script setup>
import { reactive, ref } from "vue";
import { NForm, NFormItem, NInput, NButton, useMessage } from "naive-ui";

import AuthWrapper from "../components/AuthWrapper.vue";

import { useUserStore } from "../stores/UserStore";

import router from "../router";

import { password } from "../helpers/form-rules";

const { changePassword } = useUserStore();

const message = useMessage();
const formValue = reactive({});
const formRef = ref(null);

const rules = {
  password,
  confirmation: {
    required: true,
    validator(rule, value) {
      if (formValue.password !== value) {
        return new Error("Password not matching");
      }

      return true;
    },
    trigger: ["blur"],
  },
};

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(() => {
      changePassword(formValue.password);
      router.push({ name: "dashboard" });
      message.success("Password successfully changed!");
    })
    .catch(() => {
      message.error("Please enter your new password");
    });
}
</script>
