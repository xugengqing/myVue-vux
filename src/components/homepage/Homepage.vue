<template>
    <div class="home">
        <my-header :collapse="collapse" @collapseHeader="collapseHeader"/>
        <my-side-menu :collapse="collapse"/>
        <my-content :collapse="collapse"/>
    </div>
</template>

<script>
import MyHeader from "./Header";
import MySideMenu from "./SideMenu";
import MyContent from "./Content";
export default {
    name: "Homepage",
    components: {MyHeader,MyContent,MySideMenu},
    data(){
        return{
            collapse:false
        }
    },
    methods:{
        collapseHeader(c){
            this.collapse = c
        }
    }
}
</script>

<style scoped lang="less">
    .home{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>