import { defineStore } from "pinia";

import { supabase } from "../supabase";

export const useUserStore = defineStore("user", () => {
  async function singUp(email, password) {
    console.log(email, password);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) throw error;
  }

  return { singUp };
});
