import React, {Component} from 'react'
import {Link} from 'react-router'
import styles from '@/sass/blog/area/ArticleLabel'

class ArticleLable extends Component {
    constructor() {
        super()
    }

    render() {
        const {color, name, type} = this.props;
        const style = {
            backgroundColor: `#${color}`
        };

        return (
            <div className={styles.articleLabel} style={style}>
                <Link to={`/blog/${type}/${name}`}>{name}</Link>
            </div>
        )
    }
}

export default ArticleLable