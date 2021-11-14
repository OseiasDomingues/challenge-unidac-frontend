import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import collaboradores from '@/components/collaboradores.vue'
import form from '@/components/form.vue'

const routes = [{
    path: '/',
    component: collaboradores
}, {
    path: '/form',
    component: form
}];

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;