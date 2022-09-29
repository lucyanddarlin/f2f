import { ViteSSG } from 'vite-ssg'
import { h } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'github-markdown-css'
import './style.css'
import 'virtual:windi.css'
import 'uno.css'
import { getAllEpisode } from './utils/episode'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { name: 'Index', path: '/', component: () => import('./pages/index.vue') },
]

for (const { id } of getAllEpisode()) {
  routes.push({
    name: `Episode/${id}`,
    path: `/episode/${id}`,
    component: () =>
      import('./components/episode-content.vue').then(
        ({ default: EpisodeContent }) => {
          return h(EpisodeContent, { id })
        }
      ),
  })
}

export const createApp = ViteSSG(App, { routes })
