import { defineStore } from "pinia";
import { reactive } from "vue";
import { sleep } from "../helpers/sleep";
import router from "../router";

import { supabase } from "../supabase";

export const useUserStore = defineStore("user", () => {
  let auth = reactive({});

  auth.user = supabase.auth.user();

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === "SIGNED_OUT") {
      auth.user = null;
    } else if (event == "PASSWORD_RECOVERY") {
      //FIXME: There´s a race condition that redirects to the home page
      await sleep(1);
      router.push({ name: "change-password" });
    } else {
      auth.user = session.user;
    }
  });

  async function signUp(email, password) {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) throw error;
  }

  async function signIn(email, password) {
    const { error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error) throw error;
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  async function resetPassword(email) {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);

    if (error) throw error;
  }

  async function changePassword(newPassword) {
    await supabase.auth.update({
      password: newPassword,
    });
  }

  return { signUp, signIn, signOut, auth, resetPassword, changePassword };
});
