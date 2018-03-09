import types from '@/libs/constants/ActionTypes'

function articleInfo(state = null, action) {
    switch (action.type) {
        case types.PUSH_ARTICLE_INFO:
            return action.articleInfo;

        default:
            return state
    }
}

export default articleInfo