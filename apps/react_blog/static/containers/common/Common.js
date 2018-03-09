import React, {Children, Component, cloneElement} from 'react'
import ReactConnect from '@/libs/ReactConnect'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Main from '@/components/common/Main'
import styles from '@/sass/common/Common'
import '@/sass/common/Reset'

class Common extends Component {
    constructor() {
        super()
    }

    render() {
        const {children, ...props} = this.props;

        return (
            <div className={styles.app}>
                <Header/>
                <Main>
                    {Children.map(children, child =>
                        cloneElement(child, {...props})
                    )}
                </Main>
                <Footer/>
            </div>
        )
    }
}

export default ReactConnect(Common)