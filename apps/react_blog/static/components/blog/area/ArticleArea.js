import React, {Component} from 'React'
import ArticleList from './ArticleList'
import ArticlePage from './ArticlePage'
import styles from '@/sass/blog/area/ArticleArea'

class ArticleArea extends Component {
    constructor() {
        super();

        this.state = {
            currentPage: 1,
            defaultPageSize: 8,
        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.setState({
            currentPage: pageNumber
        });
    }

    render() {
        const {articleList} = this.props;

        const ArticleBanner = () => (
            <div className={styles.banner}>
                <h2>欢迎来到我的博客，请指教 ~</h2>
                <p>找工作呀找工作呀 ~</p>
            </div>
        );

        if (!articleList || articleList.length < 1) {
            return null;
        }

        return (
            <div className={styles.articleArea}>
                <ArticleBanner />
                <ArticleList articleList={articleList}  currentPage={this.state.currentPage} defaultPageSize={this.state.defaultPageSize} />
                <ArticlePage handlePageChange={this.handlePageChange} total={articleList.length} defaultPageSize={this.state.defaultPageSize} />
            </div>
        );
    }
}

export default ArticleArea