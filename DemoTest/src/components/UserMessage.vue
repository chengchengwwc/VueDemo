<template lang="html">
    <div class="header" v-if=!islogin>
        <router-link to="/loginPage">
            <div class="header_menu">Login</div>
        </router-link>
    </div>
    <div v-else class="header">
        <router-link to="{path: '/userInfo',query:{id:id}}">
            <div class="header_menu">logOut:{{username}}</div>
        </router-link>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                islogin:false,
                username=''
            }
        },
        created(){
            let token = localStorage.getItem('token')
            if(token){
                this.islogin = true
                this.username = localStorage.getItem('username')
                this.id = localStorage.getItem('_id')
            }else{
                console.log("Failed")
            }
        }

    }
</script>
<style lang="css">
    .header{
        width: 100%;
        height:60px;
        position: fixed;
        left:0;
        top:0;
        color:cornsilk;
        background-color: bisque;
        border-bottom: 2px;
    }
    .header_menu{
        padding-left: 60px;
        padding-top:20px;
        float: right;
        color: aliceblue;
    }

</style>