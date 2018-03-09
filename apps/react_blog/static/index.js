import React from 'react'
import {render} from 'react-dom'
import {Router, match, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routers'
import configureStore from './libs/store/ConfigureStore'

const defaultState = window.REDUX_STATE;
const store = configureStore(defaultState);

const history = syncHistoryWithStore(browserHistory, store);

match({history: history, routes}, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router  {...renderProps} history={history} />
        </Provider>,
        document.getElementById('root')
    )
});
