import Root from '../containers/common/Root'

const route = {
    path: '/about',
    title: '关于',
    component: Root,
    indexRoute: {
        getComponent(nextState, callback) {
            require.ensure([], require => {
                callback(null, require('../containers/about/App'))
            }, 'about')
        }
    }
};

export default route