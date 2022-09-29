import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './style.css'
import 'virtual:windi.css'
import 'uno.css'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { name: 'Index', path: '/', component: () => import('./pages/index.vue') },
]

export const createApp = ViteSSG(App, { routes })
