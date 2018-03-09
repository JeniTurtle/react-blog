import types from '@/libs/constants/ActionTypes'
import utils from '@/libs/Utils'

function fetchCardList(data = {}) {
    return dispatch => {
        utils.ajax({
            url: '/home?interface=json',
            type: 'get',
            data: data
        }).then(res => {
            dispatch(pushCardList(res))
        });
    }
}

function pushCardList(cardList) {
    return {
        type: types.PUSH_CARD_LIST,
        cardList
    }
}

export default {
    fetchCardList,
    pushCardList
}
