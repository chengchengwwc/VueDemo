<template lang="html">
    <div>
        <label>Comment</label>
        <br>
        <div>
            <li v-for="item in items">
                Comment:One
            </li>
        </div>
        <div style="padding: 5px">
            <textarea v-model="context" style="width:80%;height:50px" placeholder="Comment"></textarea>
        </div>
        <div style="padding-top:10px">
            <button v-on:click="send_comment">Comment</button>
        </div>
    </div>
</template>
<script>
    export default{
        props:['movie_id'],
        data (){
            return {
                items: [],
                context:''
            }
        },
        created(){
            this.$http.post('http://localhost:3000/movie/comment',{id:movie_id}).then((data) => {
                if(data.body.status == 0){
                    this.items = data.body.data
                }
            })
        },
        methods:{
            send_comment(event){
                let send_data;
                if(typeof(localStorage.username) != "undefined"){
                    send_data = {
                        movie_id:this.movie_id,
                        context:this.context,
                        username:localStorage.username
                    }
                }else{
                    send_data = {
                        movie_id = this.movie_id,
                        context  = this.context,
                    }
                }
                this.$http.post('http://localhost:3000/users/postComment',send_data).then((data) => {
                    alert(data.body.message)
                })
            }
        }
    }

</script>
<style lang="css" scoped>
    
</style>