import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import changeTitle from '@/libs/middleware/ChangeTitle'
import rootReducer from '@/reducers'
import DevTools from '@/containers/common/DevTools'

export default function (preloadedState) {
    /*
     第一个参数reducer函数
     第二个参数是最初的state, 一般是服务端返回的
     */
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
          /*
           使用thunk扩展action creator,主要是在
           参数中传入dispatch和getState这两个方法。
           参考文章:http://blog.csdn.net/u010977147/article/details/53519183
           */
          applyMiddleware(thunk, changeTitle),

          //调试工具, ctrl+h显示, ctrl+w切换方向
          DevTools.instrument()
        )
    );

    return store;
}
