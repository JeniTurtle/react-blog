import React, {Component} from 'react'
import Card from './Card'
import styles from '@/sass/home/Content.scss'

class Content extends Component {
    constructor() {
        super()
    }

    render() {
        const {cardList} = this.props;

        return (
            <div className={styles.card_area}>
                <Card cardUrl="/blog" cardName="Blog" cardContent={cardList.articleList} />
                <Card cardUrl="/demo" cardName="Demo" cardContent={cardList.demoList} />
                <Card cardUrl="/about" cardName="About Me" cardContent={cardList.aboutList} />
            </div>
        )
    }
}

export default Content