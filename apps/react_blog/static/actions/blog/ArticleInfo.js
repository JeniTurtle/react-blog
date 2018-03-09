import types from '@/libs/constants/ActionTypes'
import utils from '@/libs/Utils'

function fetchArticleInfo(id) {
    return dispatch => {
        utils.ajax({
            url: `/blog/article/${id}?interface=json`,
            type: 'get'
        }).then(res => {
            dispatch(pushArticleInfo(res))
        });
    }
}

function pushArticleInfo(articleInfo) {
    return {
        type: types.PUSH_ARTICLE_INFO,
        articleInfo
    }
}

export default {
    fetchArticleInfo,
    pushArticleInfo
}
