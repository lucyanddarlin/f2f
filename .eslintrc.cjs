module.exports = {
  root: true,
  extends: ['@sxzz'],
  rules: {
    'no-console': 0, //禁止使用console
    'vue/html-self-closing': [
      0,
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'any',
        },
      },
    ],
  },
}
