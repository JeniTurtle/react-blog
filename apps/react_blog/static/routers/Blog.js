import Root from '../containers/common/Root'

const route = {
    path: '/blog',
    title: '博客',
    component: Root,
    indexRoute: {
        getComponent(nextState, callback) {
            require.ensure([], require => {
                callback(null, require('../containers/blog/Blog'))
            }, 'blog')
        }
    },
    childRoutes: [{
        path: '/blog/article/:id',
        title: '文章详情',
        getComponent(nextState, callback) {
            require.ensure([], require => {
                callback(null, require('../containers/blog/Article'))
            }, 'article')
        }
    }]
};

export default route