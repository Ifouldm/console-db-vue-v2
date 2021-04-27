import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Consoles from "../views/Consoles.vue";
import ConsoleDetails from "../views/ConsoleDetails.vue";
import Games from "../views/Games.vue";
import GameDetails from "../views/GameDetails.vue";
import Search from "../views/Search.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/consoles",
        name: "consoles",
        component: Consoles
    },
    {
        path: "/console/:id",
        name: "console",
        component: ConsoleDetails
    },
    {
        path: "/games",
        name: "games",
        component: Games
    },
    {
        path: "/game/:id",
        name: "game",
        component: GameDetails
    },
    {
        path: "/search",
        name: "search",
        component: Search
    },
    {
        path: "/about",
        name: "about",
        component: About
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
