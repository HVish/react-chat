import React from 'react';
import PropTypes from 'prop-types';

class ChatInput extends React.Component {
    render() {
        const props = {
            className: 'chat-input',
            placeholder: 'Type a message',
            disabled: !this.props.chatSelected
        };
        return <div className={'chat-input-wrapper'}><input {...props}/></div>;
    }
}

ChatInput.propTypes = {
    chatSelected: PropTypes.bool
};

export default ChatInput;