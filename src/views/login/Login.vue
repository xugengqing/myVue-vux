<template>
    <div class="login-page">
        <section class="login-container">
            <h3 class="login-title">叩丁狼客户管理系统</h3>
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
                <el-form-item prop="account">
                    <el-input v-model="loginForm.account" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-submit-btn" type="primary" @click="submit()">登录</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
    import {loginPost} from "@/requset/api";

    export default {
    name: "Login",
    data() {
        //
        return {
            loginForm: {
                account: '', // 账号
                password: '',  // 密码
            },

            loginRules: {
                account: [
                    {
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                    {
                        min: 5,
                        max: 20,
                        message: '账号长度范围是5-20个字符',
                        trigger: 'blur'
                    },

                ],
                password: {
                    required: true,
                    message: '密码不能为空',
                    trigger: 'blur'
                }
            }
        }
    },
    methods: {
        // 登陆操作
        submit() {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    loginPost({
                        username: this.loginForm.account,
                        password: this.loginForm.password
                    }).then(res =>{
                        if (res.success === true){
                            console.log(1);
                            localStorage.setItem('token',res.data);
                            localStorage.setItem('username',this.loginForm.account);
                            this.$router.push('/home');
                            this.loginForm = {};
                        }
                    })
                } else {
                    return false
                }
            })

        }

    }
}
</script>

<style lang="less"  type="text/less">
     .login-page {
         width: 100%;
         height: 100%;
         background-color: #324057;
         display: flex;
         justify-content: center;
         align-items: center;

         .login-container {
             width: 330px;
             .login-title {
                 padding: 10px 0;
                 color: #fff;
                 font-size: 24px;
                 text-align: center;
             }

             .login-submit-btn {
                 width: 100%;
             }
         }

     }
</style>