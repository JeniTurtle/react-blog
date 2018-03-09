'use strict';

module.exports = async function() {
    const self = this;

    self.renderJson = self.query.interface === 'json';
};

// 设置为非路由
exports.__controller__ = false;