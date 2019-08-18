import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from '_uri-js@4.2.2@uri-js';
import MovieList        from '../page/moviesList';
import MovieDetail      from '../page/movieDetail';
import LoginPage        from '../page/LoginPage';
import RegisterPage     from '../page/RegisterPage';
import UserInfo         from '../page/UserInfo';
import SendMail         from '../page/SendMail';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../page/index'],resolve)
    },
    {
      path:"/movieList",
      component:MovieList
    },
    {
      path:"/movieDetail",
      component:MovieDetail
    },
    {
      path:"/loginPage",
      component:LoginPage
    },
    {
      path:"/register",
      component:RegisterPage
    },
    {
      path:"/userInfo",
      component:UserInfo
    },
    {
      path:"/sendMail",
      component:SendMail
    },




  ]
})
