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
          :input-props="{ autocomplete: 'username' }"
          placeholder="example@example.com"
        />
      </n-form-item>

      <n-form-item path="password" label="Create a password">
        <n-input
          v-model:value="formValue.password"
          type="password"
          :input-props="{ autocomplete: 'new-password' }"
          placeholder="Password"
        />
      </n-form-item>

      <n-form-item path="confirmation" label="Confirm your password">
        <n-input
          v-model:value="formValue.confirmation"
          type="password"
          :input-props="{ autocomplete: 'new-password' }"
          placeholder="Repeat your password"
        />
      </n-form-item>

      <n-form-item path="terms" :show-label="false">
        <n-checkbox v-model:checked="formValue.terms" class="mr-2">
          I accept the
          <a
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            >Terms and Conditions</a
          >
          <span class="text-red-700">&nbsp;*</span>
        </n-checkbox>
      </n-form-item>

      <ButtonOrButton>
        <template #first>
          <n-button
            class="flex !w-full rounded-md text-sm font-medium mt-5"
            type="info"
            strong
            attr-type="submit"
          >
            Create an account
          </n-button>
        </template>
        <template #second>
          <router-link to="/login">
            <n-button
              strong
              type="primary"
              class="flex !w-full rounded-md text-sm font-medium"
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

import { email, password } from "../helpers/form-rules";

const { signUp } = useUserStore();

const message = useMessage();
const formValue = reactive({});
const formRef = ref(null);

const rules = {
  email,
  password,
  confirmation: {
    required: true,
    validator(rule, value) {
      if (formValue.password !== value) {
        return new Error("Password not matching");
      }

      return true;
    },
    trigger: ["input"],
  },
  terms: {
    validator(rule, value) {
      if (!value) {
        return new Error("Please accept the Terms and Conditions");
      }

      return true;
    },
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
