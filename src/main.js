import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home/Home.vue";
import Games from "./components/Games/Content.vue";
import Test from "./components/Test.vue";
import SecretCode from "./components/SecretCode.vue";
import HomeWithPlayer from "./components/HomeWithPlayer.vue";
import Teams from "./components/Teams/Teams.vue";
import Team from "./components/Teams/Team.vue";
import GamesEdit from "./components/admin/GamesEdit.vue";
import Login from "./components/admin/Login.vue";
import { getAuth } from 'firebase/auth';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';
// Set up persistence
const auth = getAuth();
setPersistence(auth, browserSessionPersistence);
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/games',
        name: 'Games',
        component: Games
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Test
    },
    {
        path: '/teams',
        name: 'Teams',
        component: Teams
    },
    {
        path: '/team/:name',
        name: 'Team',
        component: Team
    },
    {
        path:'/leaderboard',
        name:'Test',
        component: Test,
    },
    {
        path: '/games/vertle',
        name: 'SecretCode',
        component: SecretCode
    },
    {
        path:'/hp',
        name:'HomeWithPlayer',
        component: HomeWithPlayer
    },
    {
        path:'/admin',
        component: GamesEdit,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path:'/login',
        component:Login
    }
]
const router = createRouter({
    history: createWebHistory("/"),
    routes
})
router.beforeEach((to, from, next) => {
    //const auth = getAuth();
    const currentUser = auth.currentUser;
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        next('/login');
    } else {
        next();
    }
});
createApp(App).use(router).mount('#app')