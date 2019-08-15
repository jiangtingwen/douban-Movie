import Vue from 'vue'
import Router from 'vue-router'
const Recommend = () => import('@/views/Recommend')
const Movie = () => import('@/views/Movie')
const Rank = () => import('@/components/Rank')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/movie/:id',  //知道movie后面是个参数
      name: 'Movie',
      component: Movie
    },
    {
      path:'/rank',
      name:Rank,
      component:Rank
    }
   
  ]
})
