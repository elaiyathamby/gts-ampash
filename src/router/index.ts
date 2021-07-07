import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
/*import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'*/
import Tabs from '../views/Tabs.vue'
 
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'tasks',
        component: () => import('@/views/Tasks.vue')
      },
      {
        path: 'today',
        component: () => import('@/views/Today.vue')
      },
      {
        path: 'calendar',
        component: () => import('@/views/Calendar.vue')
      },
      {
        path: 'calendar/:id',
        component: () => import('@/views/TaskDetails.vue')
      },
      {
        path: 'form',
        component: () => import('@/views/Form.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
