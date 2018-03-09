import React, {Component} from 'react'
import { Link } from 'react-router'
import styles from '@/sass/home/Content.scss'

class Card extends Component {
    constructor() {
        super()
    }

    render() {
        const {cardUrl, cardName, cardContent} = this.props;
        const contentList = !cardContent ? [] : cardContent.map((item, index) => {
            return (
                <li key={index}>
                    <Link to={item.url}>{item.title}</Link>
                </li>
            )
        });

        return (
            <div className={styles.card}>
                <div className={styles.card_name}>
                    <Link to={cardUrl}>{cardName}</Link>
                </div>
                <div className={styles.card_content}>
                    <ul>
                        {contentList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Card