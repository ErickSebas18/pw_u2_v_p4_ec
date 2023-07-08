import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../modules/pokemon/pages/BienvenidaPage")
    },
    {
        path: "/reglas",
        component: () => import("../modules/pokemon/pages/Reglas")
    },
    {
        path: "/juego",
        component: () => import("../modules/pokemon/pages/PokemonPage")
    },
    {
        path: "/:pathMatch(.*)*", //wildcard
        component: () => import("../modules/pokemon/pages/NotFoundPage")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;