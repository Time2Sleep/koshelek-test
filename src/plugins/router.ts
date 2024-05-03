import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    { path: '/', name: 'home', component: () => import('../pages/HomeView.vue') },
    { path: '/settings', name: 'settings', component: () => import('../pages/SettingsView.vue') },
    { path: '/order-book', name: 'order-book', component: () => import('../pages/OrderBookView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;