import React, {Component} from 'react'
import Banner from './Banner'
import Content from './Content'

class SectionMain extends Component {
    constructor() {
        super()
    }

    render() {
        const {cardList} = this.props;

        return (
            <section>
                <Banner/>
                <Content cardList={cardList || {}}/>
            </section>
        )
    }
}

export default SectionMain
