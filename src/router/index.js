import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import SelectCharacterPage from "@/components/SelectCharacterPage.vue";
const history = createWebHistory('/solofastasy/');
const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/selectCharacter",
    name: "SelectCharacterPage",
    component: SelectCharacterPage,
  },
];

const router = createRouter({ history, routes });
export default router;
