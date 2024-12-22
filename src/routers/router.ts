import Home from "@/pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         alias: '/home',
         component: Home,
      },
      {
         path: '/login',
         component: () => import('@/pages/Login.vue')
      },
      {
         path: '/registration',
         name: 'regist-detail',
         component: () => import('@/pages/RegistrationDetails.vue')
      },
      {
         path: '/registration/form',
         name: 'regist-form',
         component: () => import('@/pages/RegistrationForm.vue')
      },
      {
         path: '/registration/application',
         name: 'application-letter',
         component: () => import('@/pages/ApplicationLetter.vue')
      }
   ]
})