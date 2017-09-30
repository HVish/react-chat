import React from 'react';
import PropTypes from 'prop-types';

class ChatTitle extends React.Component {
    render() {
        return <div className={'chat-title'}>{this.props.title}</div>;
    }
}

ChatTitle.propTypes = {
    chatSelected: PropTypes.bool,
    title: PropTypes.string.isRequired
};

export default ChatTitle;