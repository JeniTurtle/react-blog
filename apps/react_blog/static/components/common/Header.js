import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import styles from '@/sass/common/Header'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.left}>
                    <span className={styles.title}>Yellow Website</span>
                </div>
                <nav className={styles.right}>
                    <IndexLink className={styles.item} activeClassName={styles.active} to="/home">Home</IndexLink>
                    <Link className={styles.item} activeClassName={styles.active} to="/about">About</Link>
                    <Link className={styles.item} activeClassName={styles.active} to="/blog">Blog</Link>
                    <Link className={styles.item} activeClassName={styles.active} to="/demo">Demo</Link>
                    <Link className={styles.item} activeClassName={styles.active} to="/contact">Contact</Link>
                </nav>
            </header>
        )
    }
}

export default Header
