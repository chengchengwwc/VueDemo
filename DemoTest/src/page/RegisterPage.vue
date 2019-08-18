<template lang="html">
    <div>
        <div>
            <div>
                <div class="box">
                    <label>输入用户名:</label>
                    <input placeholder="用户名" v-model="username">
                </div>
                <div class="box">
                    <label>输入密码:</label>
                    <input placeholder="密码" v-model="password">
                </div>
                <div class="box">
                    <label>重复输入密码:</label>
                    <input placeholder="密码" v-model='rePassword'>
                </div>
                <div class="box">
                    <label>电话:</label>
                    <input placeholder="电话" v-model='userPhone'>
                </div>
                <div class="box">
                    <label>邮箱:</label>
                    <input placeholder="邮箱" v-model='userMail'>
                </div>
                <div class="box">
                    <button v-on:click=userRegister()>注册</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                username:'',
                password:'',
                userMail:'',
                userPhone:'',
                rePassword:''

            }
        },
        methods:{
            userRegister:function(event){
                if(this.password != this.rePassword){
                    alert("Bad")
                }else{
                    let sendData = {
                        username:this.username,
                        password:this.password,
                        userMail:this.userMail,
                        userPhone:this.userPhone,
                    }
                    this.$http.post('http://localhost:3000/user/register',sendData).then((data) => {
                        if(data.body.status == 1){
                            alert(data.body.message)
                        }else{
                            alert(data.body.message)
                            this.$router.go(-1)
                        }
                    })
                }
            }
        }
    }
</script>
<style>
    .box{
        display: flex;
        justify-content: center;
        align-items:center;
        padding-top:10px;
    }
</style>
