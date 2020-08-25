import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: () => import('../views/Course.vue')
  },
  {
    path: '/profilesettings',
    name: 'ProfileSettings',
    component: () => import('../views/ProfileSettings.vue')
  },
  {
    path: '/bonus',
    name: 'Bonus',
    component: () => import('../views/Bonus.vue')
  },
  {
    path: '/mycourse',
    name: 'MyCourse',
    component: () => import('../views/MyCourse.vue')
  },
  {
    path: '/graduates',
    name: 'Graduates',
    component: () => import('../views/Graduates.vue')
  },
  {
    path: '/teacher/:id',
    name: 'Teacher',
    component: () => import('../views/Teacher.vue')
  },
  {
    path: '/graduate/:id',
    name: 'Graduate',
    component: () => import('../views/Graduate.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/Courses.vue')
  },
  {
    path: '/offlinecourses',
    name: 'OfflineCourses',
    component: () => import('../views/OfflineCourses.vue')
  },
  {
    path: '/onlinecourses',
    name: 'OnlineCourses',
    component: () => import('../views/OnlineCourses.vue')
  },
  {
    path: '/practice/:id',
    name: 'Practice',
    component: () => import('../views/Practice.vue')
  },
  {
    path: '/onlineweek',
    name: 'OnlineWeek',
    component: () => import('../views/OnlineWeek.vue')
  },
  {
    path: '/onlinestreaming',
    name: 'OnlineStreaming',
    component: () => import('../views/OnlineStreaming.vue')
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: () => import('../views/Teachers.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  { path: '*', redirect: '/' }
  
]

const router = new VueRouter({
  routes
})

export default router
