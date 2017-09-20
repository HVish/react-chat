import React from 'react';
import './Chat.css';

class Chat extends React.Component {
    state = {
        chatTitle: 'No Chat Selected'
    }
    render() {
        return <div className={'chat'}>
            <div className={'chat-title'}>{this.state.chatTitle}</div>
        </div>;
    }
}

export default Chat;