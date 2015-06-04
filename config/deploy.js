module.exports = {
  development: {
    buildEnv: 'development', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      type: 'redis', // the default store is 'redis'
      host: 'localhost',
      port: 6379
    },
    assets: {
      type: 's3', // default asset-adapter is 's3'
      gzip: false, // if undefined or set to true, files are gziped
      gzipExtensions: ['js', 'css', 'svg'], // if undefined, js, css & svg files are gziped
      accessKeyId: '<your-access-key-goes-here>',
      secretAccessKey: process.env['AWS_ACCESS_KEY'],
      bucket: '<your-bucket-name>'
    }
  },

  production: {
    store: {
      host: 'onecoin.im',
      port: 6379,
      password: '<your-redis-secret>'
    },
    assets: {
      accessKeyId: '5127-8606-1189',
      secretAccessKey: '445b1b0834c716c78080b010e4552b3f0df7fd32e802223b71fcf65490852376',
      bucket: 'onecoin.im'
    }
  }
};
