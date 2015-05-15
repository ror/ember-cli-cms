/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'website',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      defaultLocale: 'zh'
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:onecoinim'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    //csp策略 https://github.com/rwjblue/ember-cli-content-security-policy
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self' http://localhost:3000 http://localhost:4200", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' http://localhost:3000 http://localhost:4200 data:", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' http://localhost:3000 http://localhost:4200 http://custom-api.local  data:", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' https://camo.githubusercontent.com data:",
      'style-src': "'self' 'unsafe-inline' http://localhost:3000 http://localhost:4200 ", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self' http://localhost:3000 http://localhost:4200  data:"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
