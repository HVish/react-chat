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
    ]
};

const friendList = (state = initState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default friendList;