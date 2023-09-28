import { createWebHistory, createRouter } from "vue-router";
import Ground from "@/components/Ground.vue"
import TestComponent from "@/components/TestComponent.vue"

const routes = [
    {
        path: "/",
        name: "Ground",
        component: Ground,
    },
    {
        path: "/test",  // TestComponent.vue로 이동할 Path
        name: "TestComponent",  // router name
        component: TestComponent,  // Path로 이동될 Component
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;