import React, {Component} from 'react'
import ReactConnect from '@/libs/ReactConnect'
import actions from '@/actions/blog/ArticleInfo'
import ArticleContent from '@/components/blog/article/ArticleContent'
import styles from '@/sass/blog/Article'

class Article extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        this.props.actions.fetchArticleInfo(this.props.params.id);
    }

    render() {
        const {articleInfo} = this.props;

        return (
            <div className={styles.articleMain}>
                <section className={styles.SectionMain}>
                    <ArticleContent articleInfo={articleInfo || {}} />
                </section>
            </div>
        )
    }
}

export default ReactConnect(Article, actions)