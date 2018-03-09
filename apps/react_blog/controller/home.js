'use strict';

exports.index = async function () {
    await this.bindDefault();

    await this.proxy({
        cardList: 'mock_react_blog_api:cardList',
        article: 'mock_react_blog_api:article'
    });

    const cardList = this.backData.cardList;
    const article = this.backData.article;

    if (!!cardList && !!article && article.length > 0) {
        cardList.articleList = article.slice(0, 6)
    }

    if (this.renderJson) {
        return this.body = cardList
    }

    await this.render('index', {
        title: '首页',
        reduxState: {
            cardList: cardList
        }
    })
};