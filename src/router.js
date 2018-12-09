import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import collegenav from './views/collegenav'
import article from './views/article'
import college from './views/college'
import department from './views/department'
import image from './views/image'
import albumlist from './views/albumlist'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path: '/',
            name: 'index',
            component: index,
            meta:{
                title: '首页'
            }
        },
        {
            path: '/cnav',
            name: 'collegenav',
            component: collegenav,
            meta:{
                title: '校园导航'
            }
        },
        {
            path: '/art/:artno',
            //根据编号查看相应文章
            name: 'article',
            component: article,
            meta:{
                title: '文章'
            }
        },
        {
            path: '/college',
            name: 'college',
            component: college,
            meta:{
                title: '校园校史'
            }
        },
        {
            path: '/depart',
            name: 'department',
            component: department,
            meta:{
                title: '院系专业'
            }
        },
        {
            path: '/image/:imgno',
            name: 'image',
            component: image,
            meta:{
                title: '图集'
            }
        },
        {
            path: '/alb',
            name: 'albumlist',
            component: albumlist,
            meta:{
                title: '相册列表'
            }
        }
    ]
})