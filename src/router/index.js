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
                    meta:{
                        title:"部门管理",
                        name:'department'
                    },
                    component: () => import(/* webpackChunkName: "department" */ '@/views/department/Department.vue'),
                },
                {
                    path:'/employee',
                    meta:{
                        title:"员工管理",
                        name:'employee'
                    },
                    component: () => import(/* webpackChunkName: "employee" */ '@/views/employee/Employee.vue'),
                },
                {
                    path:'/permission',
                    meta:{
                        title:"权限管理",
                        name:'permission'
                    },
                    component: () => import(/* webpackChunkName: "permission" */ '@/views/permission/Permission.vue'),
                },
                {
                    path:'/role',
                    meta:{
                        title:"角色管理",
                        name:'role'
                    },
                    component: () => import(/* webpackChunkName: "role" */ '@/views/role/Role.vue'),
                }
            ]
        }
    ]
});

export default router;