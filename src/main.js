import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home/Home.vue";
import Games from "./components/Games/Content.vue";
import Test from "./components/Test.vue";
import HomeWithPlayer from "./components/HomeWithPlayer.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/games',
        name: 'Games',
        component: Test
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Test
    },
    {
        path:'/leaderboard',
        name:'Test',
        component: Test,
    },
    {
        path:'/hp',
        name:'HomeWithPlayer',
        component: HomeWithPlayer
    }
]
const router = createRouter({
    history: createWebHistory('/'),
    routes
})
createApp(App).use(router).mount('#app')