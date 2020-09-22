const sveltePreprocess = require('svelte-preprocess')

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-nested'),
      require('autoprefixer')
    ]
  }
})

module.exports = {
  preprocess
}
