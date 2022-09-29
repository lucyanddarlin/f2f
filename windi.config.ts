import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  darkMode: 'class',
  shortcuts: {
    'flex-center': 'justify-center items-center',
    'text-md': 'text-1rem leading-1.5rem',
    'hover-text':
      'underline text-green-400 decoration-solid underline-offset-3',
    'desc-text': 'text-xs text-justify text-gray-500 font-400 leading-relaxed',
    'label-wrap':
      'bg-green-100 px-1.5 py-0.5 text-gray-500 text-xs text-center ml-2 rounded flex items-center gap-1',
  },
})
