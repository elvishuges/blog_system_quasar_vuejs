
const routes = [
  {
    path: '/',
    component: () => import('layouts/FeedLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
