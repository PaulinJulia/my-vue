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
  <main class="container">
    <div class="login-container">
      <form @submit.prevent="handleLogin" class="login-form">
        <p>Logga in</p>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" placeholder="Password" />
        </div>
        <button type="submit" class="login-button">Logga in</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.container {
  height: 100vh;
}
.login-container {
  display: flex;
  justify-content: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem;
  background-color: var(--color-grey);
  width: 20rem;
  height: 20rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  max-width: 300px;
}
input {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 300px;
}
label {
  color: var(--color-black);
}
</style>
