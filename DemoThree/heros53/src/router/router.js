import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)


import List from '../components/list/list.vue';
import Bar  from '../components/bar/bar.vue';
import Foo  from '../components/foo/foo.vue';

var routes = [
    {
        name:'heros',
        path:'/heros',
        component:List
    },
    {
        name:'bar',
        path:'/bar',
        component:Bar
    },
    {
        name:'foo',
        path:'/foo',
        component:Foo
    }
]


var router = new VueRouter({
    //全局激活routerlink的类名
    linkActiveClass:'active',
    routes
})


// 导出模块
export default router
