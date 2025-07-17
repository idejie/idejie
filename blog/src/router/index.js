import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Publications from '../views/Publications.vue'
import More from '../views/More.vue'
import Posts from '../views/Blog.vue' // Renamed import for Posts page
import PostDetail from '../views/PostDetail.vue' // New import for PostDetail page
import WritePost from '../views/WritePost.vue' // New import for WritePost page
import { useAuthStore } from '../stores/auth' // Import auth store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/publications',
      name: 'publications',
      component: Publications
    },
    {
      path: '/more',
      name: 'more',
      component: More
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'post-detail',
      component: PostDetail
    },
    {
      path: '/write',
      name: 'WritePost',
      component: () => import('../views/WritePost.vue'),
      meta: { requiresAuth: true } // Protect this route
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import('../views/Chat.vue'),
      meta: { requiresAuth: true } // Protected route
    }
    // Removed login and register routes as they are now modals
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.token) {
    next('/login'); // Redirect to login page if not authenticated
  } else {
    next();
  }
});

export default router 