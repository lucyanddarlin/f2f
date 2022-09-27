import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'
import '@unocss/reset/tailwind.css'
import './style.css'
import 'virtual:windi.css'

// createApp(App).mount('#app')
export const createApp = ViteSSG(
  App,
  { routes }
  // ({ app, router, routes, isClient, initialState }) => {}
)
