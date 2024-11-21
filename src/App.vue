<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar-container">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Börsen idag</RouterLink>
      <RouterLink to="/inspiration">Aktieinspiration</RouterLink>
      <RouterLink to="/stockprice">Aktiekurser</RouterLink>
    </nav>
  </header>

  <RouterView />
  <footer class="footer-container">
    <p>Hej footer</p>

  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.navbar-container {
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 1rem;
  background: var(--color-dark-black);
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
  background-color: var(--color-dark-black);
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
