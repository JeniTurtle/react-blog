import React, {Component} from 'react'
import ArticleItem from './ArticleItem'
import styles from '@/sass/blog/area/ArticleList'

class ArticleList extends Component {
    constructor() {
        super()
    }

    getArticleList() {
        const domList = [];
        const {currentPage, defaultPageSize, articleList} = this.props;
        const start = currentPage === 1 ? 0 : (currentPage - 1) * defaultPageSize;
        const end = start + defaultPageSize < articleList.length ? start + defaultPageSize : articleList.length;

        for (let i = start; i < end; i += 1) {
            const item = articleList[i];
            domList.push(
                <ArticleItem key={item.id} number={item.number} title={item.title} labels={item.labels} time={item.updated_at} desc={item.body} />
            );
        }

        return domList
    }

    render() {
        const articleList = this.getArticleList();

        return (
            <div className={styles.articleList}>
                {articleList}
            </div>
        )
    }
}

export default ArticleList