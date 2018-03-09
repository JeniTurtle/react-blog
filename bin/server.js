#!/usr/bin/env node

'use strict';

const env = process.env.NODE_ENV  ==  'production'
    ? 'production' : 'development';

global.Promise = require('bluebird');
global.config = require('../config/config.main')(env);

const app = require('../lib/app');
app.listen(global.config.site.port);