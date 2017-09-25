import {FILTER_CHANGED} from '../actions/friendList';
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
    ]
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
                filtered: state
                    .friends
                    .filter((friend) => (friend.name.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0))
            };
        default:
            return state
    }
}

export default friendList;