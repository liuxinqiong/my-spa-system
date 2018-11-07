import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/todo',
    name: 'todo',
    component: () => import('@/views/todo')
  },
  {
    path: '/link',
    name: 'link',
    component: () => import('@/views/link')
  },
  {
    path: '*',
    redirect: to => '/todo'
  }
  ]
})
