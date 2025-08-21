import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import SelectCharacter from "@/components/SelectCharacter.vue";
const history = createWebHistory('/solofastasy/');
const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/selectCharacter",
    name: "SelectCharacter",
    component: SelectCharacter,
  },
];

const router = createRouter({ history, routes });
export default router;
