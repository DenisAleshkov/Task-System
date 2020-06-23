import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'empty' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Record.vue')
  },
  {
    path: '/design-categories',
    name: 'design-categories',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/DesignCategories.vue')
  },
   {
    path: '/programming-categories',
    name: 'programming-categories',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/ProgrammingCategories.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/User.vue')
  },
  {
    path: '/tasks',
    name: 'tasks',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/create-design-record',
    name: 'create-design-record',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/addDesignRecord.vue')
  },
  {
    path: '/create-programming-record',
    name: 'create-programming-record',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/addProgrammingRecord.vue')
  },
  {
    path: '/design-board/:id',
    name: 'design-board',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/DesignBoard.vue')
  },
  {
    path: '/programming-board/:id',
    name: 'programming-board',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/ProgrammingBoard.vue')
  },
  {
    path: '/send-email/:id',
    name: 'send-email',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/SendTaskEmail.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)
  if(requireAuth && !currentUser) {
    next('/login?message=login')
  }else {
    next()
  }
})

export default router
