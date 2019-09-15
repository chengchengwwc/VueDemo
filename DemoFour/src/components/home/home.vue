<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div>cvcvv</div>
        </el-col>
        <el-col :span="18" class="middle">
          <h3>后台管理系统</h3>
        </el-col>
        <el-col :span="2" class="logout"></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened=true>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <i class="el-icon-circle-check"></i>
                        <span>用户列表</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>权限管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <i class="el-icon-circle-check"></i>
                        <span>角色创建</span>
                    </el-menu-item>
                    <el-menu-item index="1-1">
                        <i class="el-icon-circle-check"></i>
                        <span>权限列表</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>商品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <i class="el-icon-circle-check"></i>
                        <span>用户列表</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <i class="el-icon-circle-check"></i>
                        <span>用户列表</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>数据统计</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <i class="el-icon-circle-check"></i>
                        <span>用户列表</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted(){

  },
  beforeCreate(){
      //加载之前进行处理
      const token = localStorage.getItem('token')
      if(!token){
          this.$router.push({name:'login'})
      }
  },

  methods: {
      init(){

      },

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
     },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
     }
  }
};
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
.middle {
  text-align: center;
}
.logout {
  text-decoration: none;
}
</style>