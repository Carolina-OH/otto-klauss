import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import firebase from 'firebase'
import Juguetes from '../views/Juguetes.vue'
import Juguete from '../components/Juguete.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      autenticado:true,
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      autenticado:true,
    }
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
  },
  {
    path:'*',
    redirect:'/login'
  }, 
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/juguetes',
    name:'Juguetes',
    component:Juguetes,
    meta:{
      autenticado:true,
    }
  },
  {
    path:'/juguetes/:id',
    name:'juguete',
    component:Juguete,
    props:true,
    meta:{
      autenticado:true,
    }
  }

]

const router = new VueRouter({
mode:'history',
  routes
})

router.beforeEach((to,from,next)=>{
let user = firebase.auth().currentUser;
//console.log(to,'en route');
console.log(user)
let private_rute = to.matched.some((record)=>record.meta.autenticado)

if(private_rute && !user){
  next ({name:'Login'})
}
else if(!private_rute && user){
  next ('/home')
}
else next ()
}); 
export default router
