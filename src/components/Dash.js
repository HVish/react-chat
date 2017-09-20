import React from 'react';
import styles from './Dash.css';
import Chat from './Chat';
import FriendList from './FriendList';

const friends = [
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
];

class Dash extends React.Component {
    render() {
        return <div className={styles.root}>
            <div className={styles.friends}><FriendList friends={friends}/></div>
            <div className={styles.chat}><Chat/></div>
        </div>;
    }
}

export default Dash;