/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'website',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
			appName: 'backend',
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
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    store: 'simple-auth-session-store:cookie'
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: '/api/v1/sessions/create',
    resourceName: 'user'
  };

  ENV['simple-auth-cookie-store'] = {
    cookieName: 'rack.session'
    //, cookieExpirationTime: 600
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    //方便本地开发调试
    ENV.adapter = {
      namespace: 'api/v1'
    };

    //csp策略 https://github.com/rwjblue/ember-cli-content-security-policy
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self' http://localhost:4200 http://localhost:35729", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' http://localhost:4200 data:", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' http://localhost:4200 http://localhost:8080 http://192.168.118.130 data:", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' https://camo.githubusercontent.com data:",
      'style-src': "'self' 'unsafe-inline' http://localhost:4200", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self' http://localhost:4200 data:"
    };

    ENV['simple-auth'].crossOriginWhitelist = ['*'];
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
    ENV.adapter = {
      namespace: 'api/v1'
    };

    ENV['simple-auth'].crossOriginWhitelist = ['http://onecoin.im'];
  }

  return ENV;
};
