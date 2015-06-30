/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
var pickFiles = require('broccoli-static-compiler');
var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
	srcDir: '/',
	destDir: '/assets/bootstrap'
});

var mergeTrees = require('broccoli-merge-trees');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import({
  development: 'bower_components/bootstrap/dist/css/bootstrap.css',
  production: 'bower_components/bootstrap/dist/css/bootstrap.min.css'
});

//fixme change to addon
app.import('vendor/trunk8/trunk8.js');
app.import({
    development: 'vendor/html2canvas/dist/html2canvas.js',
    production: 'vendor/html2canvas/dist/html2canvas.min.js'
  }
);
app.import({
    development: 'bower_components/jquery.countdown/dist/jquery.countdown.js',
    production: 'bower_components/jquery.countdown/dist/jquery.countdown.min.js'
  }
);
app.import('bower_components/css-flip-counter/js/flipcounter.js');
app.import('bower_components/css-flip-counter/js/modernizr.custom.21954.js');
app.import('bower_components/css-flip-counter/css/style.css');

module.exports = mergeTrees([app.toTree(), bootstrapFonts]);
