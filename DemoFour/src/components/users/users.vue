<template>
<el-card class="box-card">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin-top:2%;">
        <el-col :span="12">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
        <el-col :span="6" style="margin-left:2%">
            <el-button type="success">添加用户</el-button>
        </el-col>
    </el-row>
    <el-row style="margin-top:2%;">
        <el-table
    :data="tableData"
    border
    style="width:100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      style="width:10%">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      style="width:10%">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      style="width:10%">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      style="width:10%">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      style="width:10%">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      style="width:10%">
    </el-table-column>

  </el-table>




    </el-row>
  

</el-card>

</template>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width:100%;
  }
</style>


<script>
export default {
    data(){
        return {
            input3:'',
            tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
        }
    },
    methods:{
        handleClick(row) {
        console.log(row);
      }
    }
}
</script>
