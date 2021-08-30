export default [
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/index.vue')
  },
  {
    path: '/echars',
    name: 'echars',
    component: () => import(/* webpackChunkName: "echars" */ '../views/echars/index.vue')
  }
]