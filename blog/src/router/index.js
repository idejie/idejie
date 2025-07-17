import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Publications from '../views/Publications.vue'
import More from '../views/More.vue'
import Posts from '../views/Blog.vue' // Renamed import for Posts page
import PostDetail from '../views/PostDetail.vue' // New import for PostDetail page

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
    }
  ]
})

export default router 