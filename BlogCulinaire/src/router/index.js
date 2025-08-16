import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import RecettesView from "@/views/RecettesView.vue";
import Details from "@/components/Details.vue";
import Meal from "@/views/Meal.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/recipe/:cathName',
        name: 'RecetteView',
        component: RecettesView
    },
    {
        path: '/recipe/:cathName/:idMeal',
        name: 'RecetteDetails',
        component: Details,
    },
    {
        path: '/recipes',
        name: 'Recettes',
        component: Meal,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router