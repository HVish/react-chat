import React from 'react';
import styles from '../styles/Dash.css';
import Chat from '../containers/ChatContainer.jsx';
import FriendList from '../containers/FriendListContainer.jsx';

class Dash extends React.Component {
    render() {
        return <div className={styles.root}>
            <div className={styles.friends}><FriendList/></div>
            <div className={styles.chat}><Chat/></div>
        </div>;
    }
}

export default Dash;