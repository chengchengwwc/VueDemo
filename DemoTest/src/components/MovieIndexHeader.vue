<template>
    <div class="header">
        <route-link to="/">
            <div class="header_menu">HomePage</div>
        </route-link>
        <route-link to="/movieList">
            <div class="header_menu">MoviePage</div>
        </route-link>
    </div>
</template>
<script>
    export default{}
</script>
<style lang="css" scoped>
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
        float: left;
        color: aliceblue;
    }
    </style>
