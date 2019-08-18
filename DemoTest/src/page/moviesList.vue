<template lang="html">
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div>
                <div class="contentLeft">
                    <ul class="cont-ul">
                        <movie-list v-for="item in movieItems":key="item._id":id="item._id":movieName="item.movieName":movieTime="item.movieTime"></movie-list>
                    </ul>
                </div>
            </div>
            <div id="example-1">
                <button v-on:click="counter += 1">Add 1</button>
                <p>add {{ counter }}</p>
            </div>
        </div>
        <div>
            <common-footer></common-footer>
        </div>
    </div>

</template>
<script>
    import MovieIndexHeader from '../components/MovieIndexHeader'
    import CommonFooter     from '../components/CommonFooter'
    import MovieList        from '../components/MovieList'
    export default{
        name:"movieList",
        data(){
            return{
                movieItems:[]
            }
        },

        components:{
            MovieIndexHeader,
            CommonFooter,
            MovieList
        },
        created(){
            this.$http.get("http://localhost:3000/movie/list").then((data) => {
                this.movieItems = data.body.data;
            })
        },
    }
    //var example1 = new Vue({
        //e1:'#example-1',
        //data:{
           // counter:0
        //}
    //})




</script>
<style lang="css" scoped>
    .container{
        width: 100%;
        margin:0 auto;
    }
    .containerMain{
        font-size:15px;
        padding-top:20px;
    }












</style>