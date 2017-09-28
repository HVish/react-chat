import {CHAT_SELECTED} from '../actions/chat';
const initState = {
    chatTitle: 'No Chat Selected'
};

const chat = (state = initState, action) => {
    switch (action.type) {
        case CHAT_SELECTED:
            const friend = action.payload;
            return {
                ...state,
                chatTitle: friend.name
            };
        default:
            return state
    }
}

export default chat;