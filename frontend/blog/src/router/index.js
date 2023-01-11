import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/main/Main.vue'),
      children:[
        {
          path: '/blog',
          name: 'BlogList',
          component: ()=>import('@/components/BlogContent.vue')
        },
        {
          path: '/essay',
          name: 'EssayList',
          component: ()=>import('@/components/BlogContent.vue')
        },
        {
          path: '/share',
          name: 'ShareList',
          component: ()=>import('@/components/BlogContent.vue')
        },
        {
          path: '/tag',
          name: 'tagList',
          component: ()=>import('@/components/BlogContent.vue')
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component: ()=>import('@/views/login/Login.vue')
    },
    {
      path:'/register',
      name:'register',
      component: ()=>import('@/views/login/Register.vue')
    },
    {
      path:'/forgetPassword',
      name:'forgetPassword',
      component: ()=>import('@/views/login/forgetPassword.vue')
    }
  ]
})
