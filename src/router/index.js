import { createWebHistory, createRouter } from "vue-router";
import Canvas from "@/views/Canvas.vue";
import StageOne from "@/views/StageOne.vue";
import Stagetwo from "@/views/StageTwo.vue";
import StageThree from "@/views/StageThree.vue";

const routes = [
  {
    path: "/",
    name: "Canvas",
    component: Canvas,
  },
  {
    path: "/StageOne",
    name: "StageOne",
    component: StageOne,
  },
  {
    path: "/Stagetwo",
    name: "Stagetwo",
    component: Stagetwo,
  },
  {
    path: "/StageThree",
    name: "StageThree",
    component: StageThree,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
