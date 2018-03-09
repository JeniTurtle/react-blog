import React, {Component} from 'react'
import {Pagination} from 'antd';
import styles from '@/sass/blog/area/ArticlePage'

class ArticlePage extends Component {
    constructor() {
        super();

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageNumber) {
        this.props.handlePageChange(pageNumber);
    }

    render() {
        return (
            <div className={styles.articlePage}>
                <Pagination onChange={this.onChangePage} defaultPageSize={this.props.defaultPageSize} total={this.props.total} />
            </div>
        )
    }
}

export default ArticlePage
