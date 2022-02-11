import { createApp } from "vue";
import App from "./App.vue";
import Characters from "./views/Characters.vue";
import CharacterDetails from "./views/CharacterDetails.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Character", component: Characters },
  { path: "/Characters", name: "Characters", component: Characters },
  { path: "/characters/:id", name: "Character", component: CharacterDetails },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: CharacterDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(store).use(router).mount("#app");
