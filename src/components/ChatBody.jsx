import React from 'react';
import nochatImg from '../images/nochat.svg';
import chatBackground from '../images/chat-background.png';
import PropTypes from 'prop-types';

class ChatBody extends React.Component {
    render() {
        const image = this.props.chatSelected ? chatBackground : nochatImg;
        const style = {
            background: `url(${image}) center center no-repeat`
        };
        return <div className={'chat-body'} style={style}></div>;
    }
}

ChatBody.propTypes = {
    chatSelected: PropTypes.bool
};

export default ChatBody;