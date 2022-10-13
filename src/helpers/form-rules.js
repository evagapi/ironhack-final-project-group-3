export const email = {
  required: true,
  validator(rule, value) {
    if (!value || !value.includes("@")) {
      return new Error("Please enter a valid email");
    }

    return true;
  },
  trigger: ["input"],
};

export const password = {
  required: true,
  validator(rule, value) {
    if (!value || value.length < 6) {
      return new Error("Password should be at least 6 characters");
    }

    return true;
  },
  trigger: ["input"],
};
