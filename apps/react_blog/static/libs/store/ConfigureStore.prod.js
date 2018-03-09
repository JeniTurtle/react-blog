import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import changeTitle from '@/libs/middleware/ChangeTitle'
import rootReducer from '@/reducers'

export default function (preloadedState) {

    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, changeTitle)
    );

    return store;
}
