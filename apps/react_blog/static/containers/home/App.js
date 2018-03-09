import React, {Component} from 'react'
import ReactConnect from '@/libs/ReactConnect'
import actions from '@/actions/home/CardList'
import SectionMain from '@/components/home/SectionMain'
import styles from '@/sass/home/App'

class App extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.actions.fetchCardList();
    }

    render() {
        const {actions, cardList} = this.props;

        return (
            <div className={styles.app}>
                <SectionMain actions={actions} cardList={cardList}></SectionMain>
            </div>
        )
    }
}

export default ReactConnect(App, actions);
