import React, {Component} from 'react'

class ArticleContent extends Component {
    constructor() {
        super()
    }

    render() {
        const {title, updated_at, body} = this.props.articleInfo;

        return (
            <div className="archive-list-area">
                <div className="archive-list">
                    <div className="article-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="article-time">
                        {updated_at && updated_at.split('T')[0]}
                    </div>
                    <div className="article-detail">{body}</div>
                </div>
            </div>
        )
    }
}

export default ArticleContent