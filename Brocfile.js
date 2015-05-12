/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

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

app.import({
  development: 'bower_components/bootstrap/dist/css/bootstrap.css.map'
}, {
  destDir: 'assets'
});

app.import({
  development: 'bower_components/bootstrap/dist/js/bootstrap.js',
  production: 'bower_components/bootstrap/dist/js/bootstrap.min.js'
});

//app.import('vendor/pdfmake/build/pdfmake.min.js');
//app.import('vendor/pdfmake/build/vfs_fonts.js');

app.import('vendor/trunk8/trunk8.js');
app.import({
    development: 'vendor/html2canvas/dist/html2canvas.js',
    production: 'vendor/html2canvas/dist/html2canvas.min.js'
  }
);
app.import('vendor/jsPDF/dist/jspdf.min.js');


module.exports = app.toTree();
