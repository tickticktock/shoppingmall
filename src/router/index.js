import Vue from 'vue'
import Router from 'vue-router'

const Home =()=>import('../views/Home/Home.vue')
const Find =()=>import('../views/Find/Find.vue')
const About =()=>import('../views/About/About.vue')
const Profile =()=>import('../views/Profile/Profile.vue')

Vue.use(Router)

const routes = [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/find',component:Find},
    {path:'/about',component:About},
    {path:'/profile',component:Profile}
]
export default new Router({
  mode: 'history',
  routes
})