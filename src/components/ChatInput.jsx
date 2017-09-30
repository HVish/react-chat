import React from 'react';
import PropTypes from 'prop-types';

class ChatInput extends React.Component {
    render() {
        const props = {
            className: 'chat-input',
            placeholder: 'Type a message',
            disabled: !this.props.chatSelected
        };
        return <input {...props}/>;
    }
}

ChatInput.propTypes = {
    chatSelected: PropTypes.bool
};

export default ChatInput;