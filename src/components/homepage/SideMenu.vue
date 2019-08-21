<template>
    <el-menu
            :default-active="activeRoute"
            class="sidemenu"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            :collapse="collapse"
            unique-opened
            router>
        <el-submenu v-for="menu in menuConfig" :key="'menu' + menu.id" :index="menu.id">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{menu.title}}</span>
            </template>
            <el-menu-item v-for="submenu in menu.childrens" :key="submenu.id" :index="submenu.id">
                <span slot="title">{{submenu.title}}</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    import {menuConfig} from "../../config/config";

    export default {
        name: "SideMenu",
        props:{
            collapse:{
                type: Boolean,
                default: false
            },

        },
        data(){
            return{
                menuConfig
            }
        },
        computed:{
            activeRoute(){
                return this.$route.meta.path
            }
        }
    }
</script>

<style lang="less" scoped>
    .sidemenu {
        position: absolute;
        top: 70px;
        left: 0;
        bottom: 0;
        overflow-y: auto;
    }
    .sidemenu::-webkit-scrollbar{
        width: 0;
    }
    .sidemenu:not(.el-menu--collapse) {
        width: 250px;
    }
    .sidemenu > ul {
        width: 100%;
    }
</style>