import types from '@/libs/constants/ActionTypes'
import utils from '@/libs/Utils'

function fetchArticleList(data) {
    data = data || {};

    return dispatch => {
        utils.ajax({
            url: '/blog?interface=json',
            type: 'get',
            data: data
        }).then(res => {
            dispatch(pushArticleList(res))
        });
    }
}

function pushArticleList(articleList) {
    return {
        type: types.PUSH_ARTICLE_LIST,
        articleList
    }
}

export default {
    fetchArticleList,
    pushArticleList
}
