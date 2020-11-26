import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/history',
    component: () => import('../views/HistoryPage.vue'),
    props: (route) => ({ status: route.query.status }),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
