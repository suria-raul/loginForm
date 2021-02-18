let mix = require('laravel-mix')

mix.sass('resources/scss/style.scss', 'public/css/')
  .js('resources/js/app.js', 'public/js/');