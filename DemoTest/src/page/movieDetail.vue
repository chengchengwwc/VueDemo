<template lang="html">
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div class="">
                <h1>Movie Name</h1>
                <div class="viewNum">Download times</div>
            </div>
            <div class="">
                <button v-on: click=movieDownload()>Download</button>
            </div>
            <div>
                <img class="headerImg">
            </div>
            <div class="btnPosition" v-on: click=support()>
                <div class="SupportBtn">点赞</div>
                <div>{{detail.movieNumSuppose}}</div>
            </div>
        </div>
        <div>
            <comment v-bind:movie_id='movie_id'></comment>
        </div>
        <div>
            <common-footer></common-footer>
        </div>
    </div>


</template>
<script>
    import MovieIndexHeader from '../components/MovieIndexHeader'
    import CommonFooter     from '../components/CommonFooter'
    import Comment        from '../components/Comment.vue'
    let movie_id = 0
    export default{
        name:"MovieDetail",
        data(){
            return{
                detail:[],
            }
        },
        components:{
            MovieIndexHeader,
            CommonFooter,
            Comment
        },
        methods:{
            support:function(event){
                this.$http.post('http://localhost:3000/movie/support',{id:movie_id}).then((data1) => {
                    let data_temp = data1.body
                    if(data_temp.status === 0){
                        this.$http.post('http://localhost:3000/movie/showNumber',{id:movie_id}).then((data2) => {
                            this.detail['movieNumSuppose'] = data2.body.data.movieNumSuppose
                        })
                    }else{
                        alert(data_temp.message)
                    }
                })
            },
            movieDownload:function(event){
                this.$http.post('http://localhost:3000/movie/download',{id:movie_id}).then((data1) => {
                    if(data1.status == 1){
                        alert(data1.message)
                    }else{
                        window.location = data1.data
                    }
                })
            }
        },
        created (){
            this.movie_id = this.$route.query.id
            movie_id = this.$route.query.id
            this.$http.post("http://localhost:3000/movie/detail",{id:movie_id}).then((data) => {
                this.detail = data.body.data
            })
        }
    }
</script>
<style lang="css" scoped>
    .headerImg{
        height:200px;
    }
    .container{
        width:100px;
        margin:0,auto;
    }
    .contentMain{
        padding-top:150px;
    }
    .btnPosition{
        padding-left:48%;
    }
    .SupportBtn{
        border:solid 1px #000;
        width:60px;
    }
    .viewNum{
        font-size: 10px
    }





</style>