'use strict';

exports.index = async function () {
    await this.bindDefault();

    await this.render('index', {
        breads : '关于',
        reduxState: {}
    })
};
