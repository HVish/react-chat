import { FILTER_CHANGED, FRIEND_SELECTED } from '../actions/friendList';
const dummyList = [
    {
        name: 'Keshav Singh',
        lastMsg: 'Bhaiya me clg ja ra hu'
    }, {
        name: 'Vishnu Singh',
        lastMsg: 'Bye'
    }, {
        name: 'Pawan Singh',
        lastMsg: 'Tu dekh lena apne hisab se'
    }, {
        name: 'Mohar Singh',
        lastMsg: 'Aa gaye!'
    }, {
        name: 'Ratish Udawat',
        lastMsg: 'Ok'
    }, {
        name: 'Preetam Swami',
        lastMsg: 'Testing...'
    }, {
        name: 'Deepak Saini',
        lastMsg: 'I am at Dashehra Mela'
    }
];
const initState = {
    friends: dummyList,
    filtered: dummyList,
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