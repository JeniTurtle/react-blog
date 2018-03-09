import React, {Component} from 'react'
import ReactConnect from '@/libs/ReactConnect'
import actions from '@/actions/demo/Demo'
import SectionMain from '@/components/demo/SectionMain'
import styles from '@/sass/demo/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {userInfo, actions} = this.props;

        return (
            <div className={styles.app}>
                <SectionMain userInfo={userInfo} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default ReactConnect(App, actions)
