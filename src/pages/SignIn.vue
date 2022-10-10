<template>
  <AuthWrapper>
    <h1
      class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700"
    >
      Log in
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

      <n-form-item path="password" label="Enter your password">
        <n-input
          v-model:value="formValue.password"
          type="password"
          :input-props="{ autocomplete: 'current-password' }"
          placeholder="Password"
        />
      </n-form-item>

      <ButtonOrButton>
        <template #first>
          <n-button
            class="flex !w-full rounded-md text-sm font-medium"
            type="info"
            strong
            attr-type="submit"
          >
            Login
          </n-button>
        </template>
        <template #second>
          <router-link to="/register">
            <n-button
              strong
              type="primary"
              class="flex !w-full rounded-md text-sm font-medium"
            >
              Create a new account?
            </n-button>
          </router-link>
        </template>
      </ButtonOrButton>
    </n-form>
    <router-link
      :to="{ name: 'forgot-password' }"
      class="text-blue-700 text-center my-4 block hover:text-blue-400 hover:underline"
      >Did you forget your password?</router-link
    >
    <hr />
  </AuthWrapper>
</template>

<script setup>
import { reactive, ref } from "vue";
import { NForm, NFormItem, NInput, NButton, useMessage } from "naive-ui";

import AuthWrapper from "../components/AuthWrapper.vue";
import ButtonOrButton from "../components/ButtonOrButton.vue";

import { useUserStore } from "../stores/UserStore";
import router from "../router";

import { email, password } from "../helpers/form-rules";

const { signIn } = useUserStore();

const message = useMessage();
const formValue = reactive({});
const formRef = ref(null);

const rules = {
  email,
  password,
};

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(async () => {
      await signIn(formValue.email, formValue.password);
      router.push({ name: "dashboard" });
    })
    .catch((error) => {
      console.log(error);
      message.error("Please enter your email and a password");
    });
}
</script>
