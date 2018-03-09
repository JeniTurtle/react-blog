"use strict";

process.env.DEBUG = process.env.DEBUG || '*';

const env = 'development';
const port = 3001;

module.exports = {
  // 站点相关的配置
  site: {
    env: env,
    port: port,
    hostname: 'localhost'
  },

  // vhost配置
  vhost: {
    '127.0.0.2': 'demo',
    'localhost': 'blog',
    '127.0.0.1': 'react_blog'
  },

  // mock server配置
  mock: {
    prefix: '/__MOCK__/'
  },

  // controller中请求各类数据前缀和域名的键值对
  api: {
    github_api: 'https://api.github.com/',
    mock_react_blog_api: `http://127.0.0.1:${port}/__MOCK__/react_blog/`
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

  // 通用参数，以模板参数的形式传递给模板引擎
  constant: {
    env: env
  },

  // 静态资源配置
  assets: {
    react_blog: {
      resource: {
        js: 'http://127.0.0.1:8080/main.js',
        css: 'http://127.0.0.1:8080/main.css'
      }
    }
  }

};
