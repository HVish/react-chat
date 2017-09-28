import React from 'react';
import './Chat.css';

class Chat extends React.Component {
    render() {
        return <div className={'chat'}>
            <div className={'chat-title'}>{this.props.chatTitle}</div>
        </div>;
    }
}

export default Chat;