import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router)

const router= new Router({
  routes: [
   {path:'/',redirect:'/login'},
   {path:'/login',component:Login},
   {path:'/home',component:Home}
  ]
})

router.beforeEach((to,from,next)=>{
   //to 要访问的路径
   //from 从哪个路径跳转而来
   //next 是一个函数，表示放行 next('/login') 强制跳转
   if(to.path==='/login')  return next()
   const tokenStr=window.sessionStorage.getItem('token')
   if(!tokenStr) return next('/login')
   next()
})
export default router