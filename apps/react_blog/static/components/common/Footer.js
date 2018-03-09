import React, {Component} from 'react'
import styles from '@/sass/common/Footer'

class Footer extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <footer className={styles.footer}>
                <p>® little bitch</p>
            </footer>
        )
    }
}

export default Footer