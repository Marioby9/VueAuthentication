import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Test from '../views/Test.vue'
import { useUserStore } from '@/stores/user.js'
import { auth } from '@/firebase'

//

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(auth.currentUser) {
      next()
    } else {
      console.log('forbidden')
      next('/')
    }
  } else {
    next()
  }
})

export default router
