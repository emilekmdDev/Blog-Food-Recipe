import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import RecettesView from "@/views/RecettesView.vue";
import Details from "@/components/Details.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/recette/:cathName',
        name: 'RecetteView',
        component: RecettesView
    },
    {
        path: '/recette/:cathName/:idMeal',
        name: 'RecetteDetails',
        component: Details,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router