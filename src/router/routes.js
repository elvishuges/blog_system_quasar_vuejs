
const routes = [
  {
    path: '/',
    component: () => import('layouts/FeedLayout.vue'),
    children: [
      { name: "feed", path: '', component: () => import('pages/index.vue') },
      { name: "feedItem", path: '/feed/:feedId', component: () => import('pages/feedItemDetails.vue') }
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
