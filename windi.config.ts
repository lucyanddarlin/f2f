import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  shortcuts: {
    'flex-center': 'justify-center items-center',
    'text-md': 'text-1rem leading-1.5rem',
    'hover-text':
      'underline text-green-400 decoration-solid underline-offset-3',
  },
})
