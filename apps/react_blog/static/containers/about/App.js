import React, {Component} from 'react'
import SectionMain from '@/components/about/SectionMain'
import styles from '@/sass/about/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {actions} = this.props;

        return (
            <div className={styles.app}>
                <SectionMain actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
