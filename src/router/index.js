import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'), 
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login.vue'), 
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../components/Register.vue'), 
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: () => import('../components/UserProfile.vue'), 
      meta: { requiresAuth: true },      
    },
    {
      path: '/events',
      name: 'EventList',
      component: () => import('../components/EventList.vue'), 
    },
    {
      path: '/events/:id',
      name: 'EventDetail',
      component: () => import('../components/EventDetail.vue'), 
      props: true, 
    },
    {
      path: '/event-form',
      name: 'EventForm',
      component: () => import('../components/EventForm.vue'), 
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: () => import('../components/UserProfile.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/organization-profile',
      name: 'OrganizationProfile',
      component: () => import('../components/OrganizationProfile.vue'), 
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes, 
  })
  
  export default router