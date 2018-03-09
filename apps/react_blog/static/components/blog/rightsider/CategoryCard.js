import React, {Component} from 'react'
import {Link} from 'react-router'
import {Icon} from 'antd'
import styles from '@/sass/blog/rightsider/CategoryCard'

class CategoryCard extends Component {
    constructor() {
        super();
        this.COLOR_LABEL_CATEGORY = 'd93f0b'
    }

    _unique() {
        const categoryList = [];
        const categoryHash = {};
        const issues = this.props.articleList;

        // 类别去重计数（待优化）
        for (let i = 0; i < issues.length; i += 1) {
            for (let j = 0; j < issues[i].labels.length; j += 1) {
                const label = issues[i].labels[j];
                if (label.color === this.COLOR_LABEL_CATEGORY) {
                    const id = label.id;
                    const name = label.name;
                    if (categoryHash[name] === undefined) {
                        categoryHash[name] = true;
                        const categoryTemp = {id, name, url: encodeURI(name), sum: 1};
                        categoryList.push(categoryTemp);
                    } else {
                        for (let k = 0; k < categoryList.length; k += 1) {
                            if (categoryList[k].name === name) {
                                categoryList[k].sum += 1;
                            }
                        }
                    }
                }
            }
        }
        return categoryList
    }

    _getCategoryLinkList() {
        const categoryList = this._unique();

        return categoryList.sort((a, b) => b.sum - a.sum).map(item => (
            <Link key={item.id} to={`/blog/category/${item.url}`}>
                <li key={item.id}>
                    {item.name}
                    <span>{item.sum}</span>
                </li>
            </Link>
        ));
    }

    render() {
        const categoryLinkList = this._getCategoryLinkList();

        return (
            <div className={styles.categoryCard}>
                <div className={styles.cardTitle}><Icon type="bars" /> 分类</div>
                <div className={styles.cardContent}>
                    <ul>
                        {categoryLinkList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CategoryCard