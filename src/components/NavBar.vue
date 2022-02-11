<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link :to="{ name: 'Characters' }" class="nav-link">
      <img
        src="https://upload.wikimedia.org/wikipedia/fr/7/74/Rick_et_Morty_Logo_FR.png"
        alt="..."
        height="36"
    /></router-link>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>
<style>
.navbar {
  padding-left: 10px;
}
</style>
