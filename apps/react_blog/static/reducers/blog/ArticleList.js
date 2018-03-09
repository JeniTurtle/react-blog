import types from '@/libs/constants/ActionTypes'

function articleList(state = null, action) {
    switch (action.type) {
        case types.PUSH_ARTICLE_LIST:
            return action.articleList;

        default:
            return state
    }
}

export default articleList