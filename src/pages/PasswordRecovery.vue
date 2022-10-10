<template>
  <AuthWrapper>
    <h1
      class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700"
    >
      Password recovery
    </h1>
    <n-alert v-if="isSubmitted" title="Check your inbox" type="success">
      You should have an email with a link to reset your password. You can close
      this page.
    </n-alert>
    <n-form
      v-else
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

      <ButtonOrButton>
        <template #first>
          <n-button
            class="flex !w-full rounded-md mt-5"
            type="info"
            strong
            attr-type="submit"
          >
            Reset password
          </n-button>
        </template>
        <template #second>
          <router-link to="/login">
            <n-button strong type="primary" class="flex !w-full rounded-md">
              Login
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
  NAlert,
  NForm,
  NFormItem,
  NInput,
  NButton,
  useMessage,
  useLoadingBar,
} from "naive-ui";

import AuthWrapper from "../components/AuthWrapper.vue";
import ButtonOrButton from "../components/ButtonOrButton.vue";

import { useUserStore } from "../stores/UserStore";

import { email } from "../helpers/form-rules";

const { resetPassword } = useUserStore();

const loadingBar = useLoadingBar();
const message = useMessage();
const formValue = reactive({});
const formRef = ref(null);

const isSubmitted = ref(false);

const rules = {
  email,
};

function handleSubmit(e) {
  e.preventDefault();
  formRef.value
    ?.validate()
    .then(async () => {
      loadingBar.start();
      await resetPassword(formValue.email);
      isSubmitted.value = true;
      loadingBar.finish();
    })
    .catch((error) => {
      console.log(error);
      message.error("Please enter your email");
    });
}
</script>
