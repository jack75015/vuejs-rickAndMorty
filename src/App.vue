<template>
  <div class="App">
    <NavBar></NavBar>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: "get_schwifty";
  src: local("get_schwifty"),
    url(./assets/fonts/get_schwifty.ttf) format("truetype");
}
#app {
  font-family: get_schwifty, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #97ce4c;
  text-shadow: 1px 0 0 #f0e14a, -1px 0 0 #f0e14a, 0 1px 0 #f0e14a,
    0 -1px 0 #f0e14a, 1px 1px #f0e14a, -1px -1px 0 #f0e14a, 1px -1px 0 #f0e14a,
    -1px 1px 0 #f0e14a;
}
</style>
