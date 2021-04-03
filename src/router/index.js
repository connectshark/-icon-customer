const { createWebHistory, createRouter } = require('vue-router')

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/addIcon',
      name: 'addIcon',
      component: () => import('../views/addIcon.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        path: '/'
      }
    }
  ]
})

export default router