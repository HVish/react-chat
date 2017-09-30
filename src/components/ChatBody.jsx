import React from 'react';
import nochatImg from '../images/nochat.svg';
import PropTypes from 'prop-types';

class ChatBody extends React.Component {
    render() {
        const style = {
            background: this.props.chatSelected ? '#FAFAFA' : `url(${nochatImg}) center center no-repeat`
        };
        return <div className={'chat-body'} style={style}></div>;
    }
}

ChatBody.propTypes = {
    chatSelected: PropTypes.bool
};

export default ChatBody;