import Home from './Home'
import About from './About'
import Demo from './Demo'
import Blog from './Blog'

if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [Home, About, Demo, Blog]
};

export default routes
