'use strict';

process.env.DEBUG = process.env.DEBUG || 'koa-grace-error:*';

const env = 'production';

module.exports = {
  // 站点相关的配置
  site: {
    env: env,
    port: 3001,
    hostname: 'production'
  },

  // vhost配置
  vhost: {
    '127.0.0.2': 'demo',
    'localhost': 'blog',
    '127.0.0.1': 'react_blog'
  },

  // 通用参数，以模板参数的形式传递给模板引擎
  constant: {
    env: env
  },

  // mongo配置
  mongo: {
    options: {
      // mongoose 配置
    },
    api: {
      'blog': 'mongodb://localhost:27017/blog'
    }
  },

  // 静态资源配置
  assets: {
    react_blog: {
      manifest: {
        path: 'build/manifest.json'
      }
    }
  }

};