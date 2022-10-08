import { defineStore } from "pinia";
import { reactive } from "vue";

import { supabase } from "../supabase";

export const useUserStore = defineStore("user", () => {
  let auth = reactive({});

  auth.user = supabase.auth.user();

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT") {
      auth.user = null;
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

  return { signUp, signIn, signOut, auth };
});
