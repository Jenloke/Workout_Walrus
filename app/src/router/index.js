import { createRouter, createWebHistory } from '@ionic/vue-router';
import { defineAsyncComponent } from 'vue'
import TabsPage from '../views/TabsPage.vue'
import LoginPage from '../views/Login.vue'
import RegisterPage from '../views/Register.vue'

const routes = [
  {
    path: '/',
    redirect: '/register'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: defineAsyncComponent(() => import('@/views/Tab1Page.vue'))
      },
      {
        path: 'tab2/:username',
        component: defineAsyncComponent(() => import('@/views/Tab2Page.vue'))
      },
      {
        path: 'tab2',
        component: defineAsyncComponent(() => import('@/views/Tab2Page.vue'))
      },
      {
        path: 'tab3',
        component: defineAsyncComponent(() => import('@/views/Tab3Page.vue'))
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
