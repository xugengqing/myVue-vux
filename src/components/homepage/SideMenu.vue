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
        <el-submenu v-for="(menu,index) in menuConfig" :key="index" :index="menu.icon">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{menu.title}}</span>
            </template>
            <el-menu-item v-for="(submenu,i) in menu.subs" :key="i" :index="submenu.index">
                <span slot="title">{{submenu.title}}</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    import {menuConfig} from "../../config/config";
    import bus from './bus'
    export default {
        name: "SideMenu",
        data(){
            return{
                menuConfig,
                collapse: false
            }
        },
        methods:{
            get(){
                console.log(this.menuConfig);
            }
        },
        computed:{
            activeRoute(){
                return this.$route.meta.path
            }
        },
        created() {
            bus.$on('collapseHeader', (msg) => {
                this.collapse = msg
            })
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