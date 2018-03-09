/**
 * 默认公共配置文件
 */

'use strict';

const path = require('path');
const extend = require('extend');

let config = {
  // controller中请求各类数据前缀和域名的键值对
  api: {
    github_api: 'https://api.github.com/'
  },

  // proxy配置
  proxy: {
    // 超时配置
    timeout: 15000
  },

  // 模板引擎配置，默认：swiger
  // template: 'swiger',
  template: {
    blog: 'swiger',
    demo: 'swiger'
  },

  // 路径相关的配置
  path: {
    // project
    project: path.resolve(__dirname, '../apps/'),
    // 当直接访问域名时的默认路由
    default_path: {
      demo: '/home/index',
      blog: '/home/index'
    },
    // 如果设置jump为false，则当直接访问域名时不重定向到default_path
    default_jump: {
      demo: true,
      blog: true,
    },

    // 错误页面, 默认是 /error/404
    default_error: {}
  },

  // router配置
  router: {
    // 路由器前缀, 默认为false
    prefix: {
      blog: false,
      demo: false
    },
    // 路由后缀, 默认为false
    suffix: {}
  },

  // csrf配置
  csrf: {
    // 需要进行xsrf防护的模块
    module: []
  },

  // 上传文件配置
  xload: {
    path: 'files/',
    upload: {
      encoding: 'utf-8',
      maxFieldsSize: 2 * 1024 * 1024,
      maxFields: 1000,
      keepExtensions: true
    },
    download: {}
  },

  // session配置
  session: {},

  // 用以配置不在代码仓储中的配置文件 
  extend: path.resolve(__dirname, './server.json')

};

module.exports = function (env) {

  const envPath = path.resolve(__dirname, `./config.${env}.js`);

  try {
    extend(config, require(envPath));
  } catch (err) {
    throw `Load ${env} Config Error：${envPath}`;
  }

  // 如果允许增量配置，则继承增量配置
  if (config.extend) {
    const extPath = config.extend;
    try {
      // 深复制
      extend(true, config, require(extPath));
    } catch (err) {
      throw `Load Extend Config Error：${extPath}`;
    }
  }

  return config;

};




