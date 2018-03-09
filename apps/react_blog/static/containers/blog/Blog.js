import React, {Component} from 'react'
import ReactConnect from '@/libs/ReactConnect'
import actions from '@/actions/blog/ArticleList'
import ArticleArea from '@/components/blog/area/ArticleArea'
import RightSider from '@/components/blog/rightsider/RightSider'
import styles from '@/sass/blog/Blog'

class Blog extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        this.props.actions.fetchArticleList();
    }

    render() {
        const articleList = this.props.articleList || [];

        return (
            <div className={styles.app}>
                <section className={styles.SectionMain}>
                    <ArticleArea articleList={articleList} />
                    <RightSider articleList={articleList} />
                </section>
            </div>
        )
    }
}

export default ReactConnect(Blog, actions)
