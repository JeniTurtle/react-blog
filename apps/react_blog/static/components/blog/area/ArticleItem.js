import React, {Component} from 'react'
import {Link} from 'react-router'
import {Icon} from 'antd';
import ArticleLabel from './ArticleLabel'
import styles from '@/sass/blog/area/ArticleItem'

class ArticleItem extends Component {
    constructor() {
        super();

        this.colors = {
            COLOR_BLOG_CATEGORY: '0052cc',
            COLOR_LABEL_CATEGORY: 'd93f0b'
        }
    }

    getLabelList() {
        const self = this;
        const category = [];
        const labelList = [];
        const {labels} = this.props;
        let i, label;

        for (i in labels) {
            label = labels[i];

            switch(label.color) {
                case self.colors.COLOR_LABEL_CATEGORY:
                    category.push(
                        <ArticleLabel key={label.id} id={label.id} name={label.name} color={label.color} type="category" />
                    );
                    break;

                case self.colors.COLOR_BLOG_CATEGORY:
                    labelList.push(
                        <ArticleLabel key={label.id} id={label.id} name={label.name} color={label.color} type="tag" />
                    );
                    break;
            }
        }
        return {category, labelList}
    }

    render() {
        const {time, number, title, desc} = this.props;
        const {category, labelList} = this.getLabelList();

        return (
            <div className={styles.articleItem}>
                <div className={styles.title}>
                    <Link to={`/blog/article/${number}`}>{title}</Link>
                </div>

                <div className={styles.time}>
                    <Icon type="calendar" /> &nbsp;{time.split('T')[0]} &nbsp;
                </div>

                <div className={styles.label}>
                    <Icon type="bars" /> &nbsp;{category} &nbsp;
                    <Icon type="tag-o" /> &nbsp;{labelList}
                </div>

                <div className={styles.desc}>
                    <p>
                        {desc.split('----')[0]}
                        <span className={styles.desc_more}>
                            <Link to={`/blog/article/${number}`}>Learn more...</Link>
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default ArticleItem