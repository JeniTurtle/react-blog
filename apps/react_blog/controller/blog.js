'use strict';

exports.index = async function () {
    await this.bindDefault();

    await this.proxy({
        article: 'mock_react_blog_api:article',
    });

    const article = this.backData.article;

    if (this.renderJson) {
        return this.body = article
    }

    await this.render('index', {
        title : '博客',
        reduxState: {
            articleList: article
        }
    })
};

exports.article = async function () {
    await this.bindDefault();

    const id = this.params.id || '';

    await this.proxy({
        article: `github_api:repos/axuebin/articles/issues/${id}`,
    });

    const article = this.backData.article;

    if (this.renderJson) {
        return this.body = article
    }

    await this.render('index', {
        title : '文章详情',
        reduxState: {
            articleInfo: article
        }
    })
};

exports.article.__regular__ = '/:id';