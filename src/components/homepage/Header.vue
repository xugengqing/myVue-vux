<template>
    <div class="header-wrapper">
        <h3>叩丁狼客户关系管理后台</h3>
        <el-button type="info" class="collapse-icon"><i class="el-icon-menu"></i></el-button>
        <el-dropdown trigger="click" class="header-dropdown" @command="handleCommand">
          <el-button type="info">用户登录<i class="el-icon-s-custom"></i></el-button>
          <el-dropdown-menu slot="dropdown" class="header-btn">
            <el-dropdown-item><i class="el-icon-switch-button"></i>用户注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            username:''
        }
    },
    methods:{
        handleCommand(){

        }
    }
}
</script>

<style scoped lang="less">
.header-wrapper {
    height: 50px;
    background-color: #324057;
    color: #fff;
    line-height: 50px;
    h3 {
        float:left;
        letter-spacing: 1px;
        padding: 0 20px;
    }
    .collapse-icon {
        float: left;
        font-size: 22px;
    }
    .header-dropdown {
        float: right;
        padding-right: 20px;
        color: #fff;

    }
}
</style>