import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import vueSwipr from 'vue-awesome-swiper'

import '../node_modules/animate.css/animate.css'

import Home from './components/home'
import Classification from './components/classification'
import Shopping from './components/shopping'
import My from './components/my'
import Login from "./components/login"
import Register from "./components/register"

import Jydq from './components/pages/jydq.vue'
import Spyl from './components/pages/spyl.vue'
import Ghmz from './components/pages/ghmz.vue'

import Mall from './components/mall' 
import Default from './components/mall/default.vue'
import Price from './components/mall/price.vue'
import Comment from './components/mall/comment.vue'
import Goods from './components/goods'
import Pinglun from './components/pinglun'
import One from './components/one'


Vue.use(Router)
Vue.use(vueSwipr)

Vue.config.productionTip = false

const routes=[{path:'/',redirect:'/home'},
              {path:'/home',component:Home},
              {path:'/classification',
              component:Classification,
              children:[
                {path:'/',redirect:'/jydq'},
                {path:'/jydq',component:Jydq},
                {path:'/spyl',component:Spyl},
                {path:'/ghmz',component:Ghmz},
              ]},
              {path:'/shopping',component:Shopping},
              {path:'/my',component:My},
              {path:'/login',component:Login},
              {path:'/register',component:Register},
              {path:'/mall',
               component:Mall,
               children:[
                {path:'/',redirect:'/default'},
                {path:'/default',component:Default},
                {path:'/price',component:Price},
                {path:'/comment',component:Comment},
              ]},
              {path:'/goods',component:Goods},
              {path:'/pinglun',component:Pinglun},
              {path:'/one',component:One}
              
              ]

const router=new Router({
    routes
});

new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
