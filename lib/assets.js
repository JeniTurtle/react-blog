'use strict';

const path = require('path');
const config = global.config;

const reactJs = function(appName) {
    if (config.site.env == 'production') {
        const filepath = path.join(config.path.project, appName, config.assets[appName].manifest.path);
        const manifest = require(filepath);
        return [
            manifest.manifest.js,
            manifest.vendor.js,
            manifest.bundle.js
        ]
    } else {
        return [
            config.assets[appName].resource.js
        ]
    }
};

const reactCss = function(appName) {
    if (config.site.env == 'production') {
        const filepath = path.join(config.path.project, appName, config.assets[appName].manifest.path);
        const manifest = require(filepath);
        return [
            manifest.bundle.css
        ]
    } else {
        return [
            config.assets[appName].resource.css
        ]
    }
};

exports.reactJs = reactJs;
exports.reactCss = reactCss;