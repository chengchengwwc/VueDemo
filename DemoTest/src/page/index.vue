<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="userMessage">
            <user-message></user-message>
        </div>
        <div class="contentPic">
            <index-header-pic></index-header-pic>
        </div>
        <div class="contentMain">
            <div class="contentLeft">
                <ul class="cont-ul">
                    <movie-list></movie-list>
                </ul>
            </div>
            <div class="contentRight">
                <ul class="cont-ul">
                    <news-list></news-list>
                </ul>
            </div>
        </div>
        <common-footer></common-footer>
    </div>

</template>

<script>
    import MovieIndexHeader from '../components/MovieIndexHeader'
    import CommonFooter     from '../components/CommonFooter'
    import NewsList         from '../components/NewsList'
    import MovieList        from '../components/MovieList'
    import IndexHeaderPic   from '../components/IndexHeaderPic'
    import UserMessage      from '../components/UserMessage'
    export default{
        data(){
            return {

            }
        },
        components:{
            MovieIndexHeader,
            CommonFooter,
            NewsList,
            MovieList,
            IndexHeaderPic,
            UserMessage
        },
        created(){

        }

    }

</script>
<style lang="css" scoped>
    .container{
        width: 100%;
        margin:0 atuo;
    }
    .contentMain{
        height:50px;
    }
    .userMessage{
        padding-top:100px;
        margin-top:-10px;
        margin-left:-10px;

    }
    .contentPic{
        padding-top:5px;
    }
    .contentLeft{
        width: 60%;
        float: left;
        margin-top:5px;
        border-top:1px solid #000;
    }
    .contentRight{
        width: 38%;
        float:right;
        margin-left:1%;
        margin-top:5px;
        border-top:1px solid #000;
    }
    .cont-ul{
        padding-top:0.5rem;
        background-color: #fff;
    }
    .cont-ul ::after{
        content:'';
        display: block;
        clear: both;
        width:0;
        height:0;
    }

    
</style>