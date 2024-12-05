<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("test@test.com"); //för att testa route guards
const password = ref("test123"); //för att testa route guards

const handleLogin = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.value)) {
    alert("Ogiltig e-postadress.");
    return;
  }

  if (password.value.length < 6) {
    alert("Lösenordet måste vara minst 6 tecken.");
    return;
  }

  if (email.value && password.value) {
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("password", password.value);
    router.push({ name: "user" });
  } else {
    alert("Felaktig e-post eller lösenord.");
    email.value = "";
    password.value = "";
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
input {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 300px;
}
</style>
