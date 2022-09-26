import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'

// createApp(App).mount('#app')
export const createApp = ViteSSG(
  App,
  { routes }
  // ({ app, router, routes, isClient, initialState }) => {}
)
