import React, {Component} from 'react'
import styles from '@/sass/home/Banner.scss'
import imgAvatar from '@/images/home/avatar.jpg'

class Banner extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={styles.banner}>
                <div className={styles.divBox}>
                    <div className={styles.avatar}>
                        <img src={imgAvatar} alt="" />
                    </div>
                    <div className={styles.content}>
                        <h1>Holy High</h1>
                        <p>马勒戈壁的，快滚回去写代码吧小婊砸！</p>
                        <p>我去年买了个表啊！</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner