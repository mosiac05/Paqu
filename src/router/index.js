import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Universities from '../views/Universities.vue'

import Faculties from '../components/Faculties.vue'
import Departments from '../components/Departments.vue'
import Courses from '../components/Courses.vue'
import CourseOptions from '../components/CourseOptions.vue'
import Exams from '../components/Exams.vue'
import Tests from '../components/Tests.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/universities',
    name: 'universities',
    component: Universities,
  },
  {
    path: '/faculties/:universityId',
    name: 'faculties',
    component: Faculties
  },
  {
    path: '/departments/:facultyId',
    name: 'departments',
    component: Departments
  },
  {
    path: '/courses/:deptId',
    name: 'courses',
    component: Courses,
  },
  {
    path: '/course-options/:courseId',
    name: 'course-options',
    component: CourseOptions,
  },
  {
    path: '/exams/:courseId',
    name: 'exams',
    component: Exams
  },
  {
    path: '/tests/:courseId',
    name: 'tests',
    component: Tests
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    redirect: '/'
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
