<template>
    <div>
        <div>
            <div>
                <div class="box">
                    <label>UserName:</label>
                    <input placeholder="username" v-model='username'>
                </div>
                <div class="box">
                    <label>PassWord:</label>
                    <input placeholder="password" v-model='password'>
                </div>
                <div class="box">
                    <button v-on:click=userLogin()>Login</button>
                    <button style="margin-left:10px" v-on:click=userRegister()>注册</button>
                    <button style="margin-left:10px" v-on:click=findBackPassword()>忘记密码</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            userLogin:function(event){
                this.$http.post("http://localhost:3000/user/login",{username:this.username,password:this.password}).then((data) => {
                    if(data.status == 1){
                        alert(data.body.message)
                    }else{
                        let save_token = {
                            token:data.body.data.token,
                            username:this.username
                        }
                        localStorage.setItem("token",data.body.data.token)
                        localStorage.setItem('username',data.body.data.user[0].username)
                        localStorage.setItem('_id',data.body.data.user[0]._id)
                        this.$router.go(-1)
                    }
                })
            },
            userRegister:function(event){
                this.$router.push({push:'register'})
            },
            findBackPassword:function(event){
                this.$router.push({path:'findPassword'})
            }
        }


    }





</script>



<style lang="css" scoped>
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
</style>