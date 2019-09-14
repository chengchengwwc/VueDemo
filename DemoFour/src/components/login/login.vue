<template>
  <div class="login-wrap">
    <el-form :label-position="labelPosition" 
            label-width="80px" 
            :model="formLabelAlign"
            class="login-form">
      <h2>用户登陆</h2>
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn" @click="handleLogin">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        username: "",
        password: "",
      }
    };
  },
  methods:{
      async handleLogin(){
            const res = await this.$http.post('login',this.formLabelAlign)
            const { data,meta:{msg,status}} = res.data
            if(status === 200){
                this.$message({
                    message:'登陆成功',
                    type: 'success'
                })
                //保存token
                localStorage.setItem('token',data.token)
                this.$router.push({name:"home"})
            }else{
                this.$message({
                    message:'登陆失败',
                    type: 'warning'
                })
            }
      }

  }
};
</script>
<style>
    .login-wrap{
        height: 100%;
        background-color: #324152;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-wrap .login-form{
        background-color: #fff;
        width: 400px;
        padding: 30px;
        border-radius: 5px;
    }
    .login-wrap .login-form .login-btn{
        width: 100%
    }




</style>