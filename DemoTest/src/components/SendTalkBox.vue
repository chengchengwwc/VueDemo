<template lang="html">
    <div>
        <div>
            <input placeholder="发送用户名" v-model='toUserName'>
        </div>
        <div style="padding: 10px">
            <input placeholder="发送标题" v-model='title'>
        </div>
        <div style="padding: 5px">
            <textarea style="width: 80%;height:50px;" placeholder="内容" v-model='context'></textarea>
        </div>
        <div style="padding-top:10px;">
            <button v-on: click=sendMail()>发送站内信</button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                toUserName:'',
                title:'',
                context:''
            }
        },
        methods:{
            sendMail:function(event){
                let send_data = {
                    token:localStorage.token,
                    user_id:localStorage._id,
                    toUserName:this.toUserName,
                    title:this.title,
                    context:this.context
                }
                this.$http.post('http://localhost:3000/users/sendEmail',send_data).then((data) => {
                    if(data.body.status == 1){
                        alert(data.body.message)
                    }else{
                        alert('send success')
                    }
                })          
            }

        }
    }






</script>