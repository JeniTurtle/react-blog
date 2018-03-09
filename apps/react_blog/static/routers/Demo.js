import Root from '../containers/common/Root'

const route = {
    path: '/demo',
    component: Root,
    indexRoute: {
        getComponent(nextState, callback) {
            require.ensure([], require => {
                callback(null, require('../containers/demo/App'))
            }, 'demo')
        }
    }
};

export default route