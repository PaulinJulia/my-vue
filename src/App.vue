<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import FooterComponent from "./components/FooterComponent.vue";
import { provide, ref } from "vue";

const isLoggedIn = ref(false);
provide("isLoggedIn", isLoggedIn);
</script>

<template>
  <header>
    <nav class="navbar-container">
      <RouterLink to="/"
        ><img
          alt="Bay leaf"
          class="logo"
          src="@/assets/greenleaf.png"
          width="16"
          height="16"
        /><span>Start</span></RouterLink
      >
      <RouterLink to="/inspiration">Inspiration</RouterLink>
      <RouterLink to="/stockprice">Aktiekurser</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  /* max-height: 100vh; */
}

.navbar-container {
  font-size: 12px;
  text-align: center;
  padding: 1rem;
  background: var(--color-black);
}
nav {
  color: var(--text-color-mint);
}

nav a.router-link-exact-active {
  color: var(--text-white-soft);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.footer-container {
  background-color: var(--color-black);
  color: var(--text-white-soft);
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
