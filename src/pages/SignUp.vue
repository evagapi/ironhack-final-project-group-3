<template>
  <AuthWrapper>
    <h1
      class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700"
    >
      Create new account
    </h1>
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="rules"
      size="large"
      class="w-80"
      @submit="handleSubmit"
    >
      <n-form-item path="email" label="Enter your email">
        <n-input
          v-model:value="formValue.email"
          placeholder="example@example.com"
        />
      </n-form-item>

      <n-form-item path="password" label="Create a password">
        <n-input
          v-model:value="formValue.password"
          type="password"
          placeholder="Password"
        />
      </n-form-item>

      <n-checkbox value="terms-and-conditions" class="mr-2">
        I accept the
        <a
          class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >Terms and Conditions</a
        >
        <span class="text-red-700">&nbsp;*</span>
      </n-checkbox>

      <ButtonOrButton>
        <template #first>
          <n-button
            class="flex w-full rounded-md text-sm font-medium mt-5"
            type="info"
            strong
            secondary
            attr-type="submit"
          >
            Create an account
          </n-button>
        </template>
        <template #second>
          <router-link to="/login">
            <n-button
              strong
              secondary
              type="primary"
              class="flex w-full rounded-md text-sm font-medium"
              attr-type="submit"
            >
              Already a member?
            </n-button>
          </router-link>
        </template>
      </ButtonOrButton>
    </n-form>
  </AuthWrapper>
</template>

<script setup>
import { reactive, ref } from "vue";
import {
  NForm,
  NFormItem,
  NInput,
  NCheckbox,
  NButton,
  useMessage,
} from "naive-ui";

import AuthWrapper from "../components/AuthWrapper.vue";
import ButtonOrButton from "../components/ButtonOrButton.vue";

import { useUserStore } from "../stores/UserStore";

import router from "../router";

const { signUp } = useUserStore();

const message = useMessage();
const formValue = reactive({});
const formRef = ref(null);

const rules = {
  email: {
    required: true,
    validator(rule, value) {
      if (!value || !value.includes("@")) {
        return new Error("Please enter a valid email");
      }

      return true;
    },
    trigger: ["input"],
  },
  password: {
    required: true,
    validator(rule, value) {
      if (!value || value.length < 6) {
        return new Error("Password should be at least 6 characters");
      }

      return true;
    },
    trigger: ["input"],
  },
  "terms-and-conditions": {
    required: true,
    trigger: ["input"],
  },
};

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(() => {
      signUp(formValue.email, formValue.password);
      router.push({ name: "login" });
      message.success(
        "All done! Check your inbox to validate your account and enter your credentials"
      );
    })
    .catch(() => {
      message.error("Please enter your email and a password");
    });
}
</script>
