import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import { useUserStore } from '../stores/userStore.js';


const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home, 
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
    {
      path: '/:pathMatch(.*)*', // This will match all paths that don't match defined routes
      name: 'NotFound',
      component: () => import('../components/NotFound.vue'),
    },    
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes, 
  })

 
 

  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !useUserStore().user) {
      next('/login');
    } else {
      next();
    }
  });
  
  export default router