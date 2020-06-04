import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'default',
        redirect: '/chart',
    },
    {
        path: '/chart',
        name: 'chart',
        component: () => import('@cp/ChartsBox/ChartsBox.vue')
    },
    {
        path: '/component',
        name: 'component',
        component: () => import('@cp/ComponentBox/ComponentBox.vue')
    },
    {
        path: '/testPage',
        name: 'testPage',
        component: () => import('@cp/TestPage/TestPage.vue')
    },
];

const router = new VueRouter({
    routes
});

export default router