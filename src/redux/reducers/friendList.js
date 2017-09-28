import {FILTER_CHANGED, FRIEND_SELECTED} from '../actions/friendList';
const initState = {
    friends: [
        {
            name: 'Vishnu Singh',
            lastMsg: 'Bye'
        }, {
            name: 'Ratish Udawat',
            lastMsg: 'Ok'
        }, {
            name: 'Preetam',
            lastMsg: 'Testing...'
        }
    ],
    filtered: [
        {
            name: 'Vishnu Singh',
            lastMsg: 'Bye'
        }, {
            name: 'Ratish Udawat',
            lastMsg: 'Ok'
        }, {
            name: 'Preetam',
            lastMsg: 'Testing...'
        }
    ],
    friendSelected: null
};

const friendList = (state = initState, action) => {
    switch (action.type) {
        case FILTER_CHANGED:
            if (!action.payload) {
                return {
                    ...state,
                    filtered: state.friends
                };
            }
            return {
                ...state,
                filtered: state.friends.filter((friend) => (
                    friend.name.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0)
                )
            };
        case FRIEND_SELECTED:
            return {
                ...state,
                friendSelected: action.payload
            };
        default:
            return state
    }
}

export default friendList;