import types from '@/libs/constants/ActionTypes'

function cardList(state = null, action) {
    switch (action.type) {
        case types.PUSH_CARD_LIST:
            return action.cardList;

        default:
            return state
    }
}

export default cardList