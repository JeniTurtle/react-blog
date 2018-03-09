import React, {Component} from 'react'
import {Link} from 'react-router'
import {Icon} from 'antd'
import styles from '@/sass/blog/rightsider/TagCard'

class TagCard extends Component {
    constructor() {
        super();
        this.COLOR_LABEL_CATEGORY = 'd93f0b';
        this.COLOR_BLOG_CATEGORY = '0052cc';
    }

    _unique() {
        const tagList = [];
        const tagHash = {};
        const issues = this.props.articleList;
        // 类别去重计数（待优化）
        for (let i = 0; i < issues.length; i += 1) {
            for (let j = 0; j < issues[i].labels.length; j += 1) {
                const label = issues[i].labels[j];
                if (label.color !== this.COLOR_BLOG_CATEGORY && label.color !== this.COLOR_LABEL_CATEGORY) {
                    const id = label.id;
                    const name = label.name;
                    if (tagHash[name] === undefined) {
                        tagHash[name] = true;
                        const tagTemp = { id, name, url: encodeURI(name), sum: 1 };
                        tagList.push(tagTemp);
                    } else {
                        for (let k = 0; k < tagList.length; k += 1) {
                            if (tagList[k].name === name) {
                                tagList[k].sum += 1;
                            }
                        }
                    }
                }
            }
        }
        return tagList
    }

    _getTagLinkList() {
        const tagList = this._unique();

        return tagList.sort((a, b) => b.sum - a.sum).map(item => (
            <Link key={item.id} to={`/blog/tag/${item.url}`}>{item.name} ({item.sum})</Link>
        ));
    }

    render() {
        const tagLinkList = this._getTagLinkList();

        return (
            <div className={styles.tagCard}>
                <div className={styles.tagTitle}><Icon type="tag-o" /> 标签</div>
                <div className={styles.tagContent}>
                    {tagLinkList}
                </div>
            </div>
        )
    }
}

export default TagCard