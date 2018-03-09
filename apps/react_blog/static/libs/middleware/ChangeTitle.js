'use strict';

import {LOCATION_CHANGE} from 'react-router-redux';
import routes from '@/routers';

const checkPath = function(routePath, pathname) {
    let routePathList = routePath.split('/');
    let pathnameList = pathname.split('/');
    let count = 0;

    if (routePathList.length != pathnameList.length) {
        return false;
    }

    routePathList = routePathList.filter(function(val) {
       return val.indexOf(":") === -1;
    });
    routePathList.map(function(val, index) {
        (val === pathnameList[index]) && (count += 1);
    });

    return count === routePathList.length;
};

const getTitle = (routes, pathname) => {
    const routeList = routes.childRoutes;

    for (let i in routeList) {
        if (routeList[i].path === pathname || checkPath(routeList[i].path, pathname)) {
            return routeList[i].title;
        } else if (routeList[i].childRoutes) {
            return getTitle(routeList[i], pathname)
        }
    }
};

const changeTitle = store => next => action => {
    if (action.type === LOCATION_CHANGE) {
        document.title = getTitle(routes, action.payload.pathname);
    }
    return next(action);
};

export default changeTitle