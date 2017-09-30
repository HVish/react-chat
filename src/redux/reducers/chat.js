import {CHAT_SELECTED} from '../actions/chat';
const initState = {
    chatTitle: 'No Chat Selected',
    chatSelected: false
};

const chat = (state = initState, action) => {
    switch (action.type) {
        case CHAT_SELECTED:
            const friend = action.payload;
            return {
                ...state,
                chatTitle: friend.name,
                chatSelected: true
            };
        default:
            return state
    }
}

export default chat;