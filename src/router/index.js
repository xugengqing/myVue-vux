import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            meta:{
                title:"登录页面",
                name:'login'
            },
            component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
        },
        {
            path: '/home',
            component: () => import(/* webpackChunkName: "home" */ '@/components/homepage/Homepage.vue'),
            children:[
                {
                    path:'/department',
                    component: () => import(/* webpackChunkName: "department" */ '@/views/department/Department.vue'),
                }
            ]
        }
    ]
});

export default router;