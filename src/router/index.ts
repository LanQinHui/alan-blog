import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/Home/index.vue')
const H5Tab = () => import('@/views/H5Tab/index.vue')
const OOTab = () => import('@/views/OOTab/index.vue')
const ServerTab = () => import('@/views/ServerTab/index.vue')
const TakeNotesTab = () => import('@/views/TakeNotesTab/index.vue')
const DevelopmentPlatformTab = () => import('@/views/DevelopmentPlatformTab/index.vue')
const Detailspage = () => import('@/views/Detailspage/index.vue')


const SignIn = () => import('@/views/Home/SignPage/sign_in.vue')
const SignOut = () => import('@/views/Home/SignPage/sign_out.vue')
const SignUp = () => import('@/views/Home/SignPage/sign_up.vue')



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: false
    },
    component: Home
  },
  {
    path: '/h5Tab',
    name: 'H5Tab',
    meta: {
      title: '大前端',
      keepAlive: true,
      requireAuth: true
    },
    component: H5Tab
  },
  {
    path: '/oOTab',
    name: 'OOTab',
    meta: {
      title: '后端',
      keepAlive: true,
      requireAuth: true
    },
    component: OOTab
  },
  {
    path: '/serverTab',
    name: 'ServerTab',
    meta: {
      title: '服务器',
      keepAlive: true,
      requireAuth: true
    },
    component: ServerTab
  },
  {
    path: '/takeNotesTab',
    name: 'TakeNotesTab',
    meta: {
      title: '随心笔记',
      keepAlive: true,
      requireAuth: true
    },
    component: TakeNotesTab
  },
  {
    path: '/developmentPlatformTab',
    name: 'DevelopmentPlatformTab',
    meta: {
      title: '开放平台',
      keepAlive: true,
      requireAuth: true
    },
    component: DevelopmentPlatformTab
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: true
    },
    component: SignIn
  },
  {
    path: '/SignOut',
    name: 'SignOut',
    meta: {
      title: '登出',
      keepAlive: true,
      requireAuth: true
    },
    component: SignOut
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    meta: {
      title: '注册',
      keepAlive: true,
      requireAuth: true
    },
    component: SignUp
  },
  {
    path: '/details',
    name: 'Detailspage',
    meta: {
      title: '文章详情',
      keepAlive: true,
      requireAuth: true
    },
    component: Detailspage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;