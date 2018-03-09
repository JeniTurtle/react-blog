import Root from '../containers/common/Root'

const route = {
    path: '/home',
    title: '首页',
    component: Root,
    indexRoute: {
        getComponent(nextState, callback) {
            require.ensure([], require => {
                callback(null, require('../containers/home/App'))
            }, 'home')
        }
    }
};

export default route