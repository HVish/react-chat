import React from 'react';
import PropTypes from 'prop-types';
import ChatTitle from './ChatTitle.jsx';
import ChatBody from './ChatBody.jsx';
import ChatInput from './ChatInput.jsx';

class Chat extends React.Component {
    render() {
        const commonProps = {
            chatSelected: this.props.chatSelected
        };
        return <div className={'chat'}>
            <ChatTitle title={this.props.chatTitle} {...commonProps} />
            <ChatBody {...commonProps} />
            <ChatInput {...commonProps} />
        </div>;
    }
}

Chat.propTypes = {
    chatTitle: PropTypes.string.isRequired
};

export default Chat;