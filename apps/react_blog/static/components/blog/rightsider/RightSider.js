import React, {Component} from 'react'
import {Link} from 'react-router'
import styles from '@/sass/blog/rightsider/RightSider'
import CategoryCard from './CategoryCard'
import TagCard from './TagCard'

class RightSider extends Component {
    constructor() {
        super()
    }

    render() {
        const ArchiveCard = () => (
            <div className={styles.archive}>
                <Link to="/blog/archive">所有文章</Link>
            </div>
        );

        return (
            <div className={styles.rightsider}>
                <ArchiveCard />
                <CategoryCard articleList={this.props.articleList} />
                <TagCard articleList={this.props.articleList} />
            </div>
        )
    }
}

export default RightSider