var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less', 'resources/assets/css/app.css')
        .styles([
            'app.css/app.css',
            'select2.css'
        ], 'public/css/blotter.css')
        .scripts([
            'jquery.1.1.3.js',
            'select2.js',
        ], 'public/js/blotter.js')
        .version(['public/css/blotter.css', 'public/js/blotter.js']);

    mix.copy('public/fonts', 'public/build/fonts');

});
