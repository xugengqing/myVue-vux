<template>
    <div class="content-container" :class="{'content-collapse': collapse}">
    <h3>{{$route.meta.title}}</h3>
    <section class="content">
        <router-view/>
    </section>
    <footer>
        <div class="footer_left">
            <strong>Copyright &copy; 2016-2019 <a href="http://www.wolfcode.cn" target="_blank">叩丁狼</a>.</strong>
            All rights reserved.
        </div>
        <div class="footer_right"><strong>Version</strong> 1.0.0</div>
    </footer>
    </div>
</template>

<script>
export default {
    name: "Content",
    props: {
        collapse: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="less" scoped>
    .content-container {
        position: absolute;
        top: 70px;
        left: 250px;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        transition: left .3s ease-in-out;
        background-color: #fff;

        .content {
            width: 100%;
            height: 100%;
            overflow-y: auto;
        }
        .footer_left {
            float: left;
            font-size: 12px;
        }

        .footer_right {
            float: right;
            padding-right: 10px;
            font-size: 12px;
        }
    }

    .content-collapse {
        left: 65px;
    }

</style>