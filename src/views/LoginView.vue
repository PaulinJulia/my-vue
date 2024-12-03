<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// const isLoggedIn = ref(false);
// const userEmail = ref("Användarnamn");
const email = ref("");
const password = ref("");

// provide("email", email);
// provide("password", password);
// provide("userEmail", userEmail);
// provide("isLoggedIn", isLoggedIn);

// const authState = inject("authState");

const handleLogin = async () => {
  if (email.value === "test@test.com" && password.value === "test123") {
    console.log("Inloggning lyckades!");
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("password", password.value);
    console.log(email.value);
    console.log(password.value);
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
