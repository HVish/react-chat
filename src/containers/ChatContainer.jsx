import {connect} from 'react-redux';
import Chat from '../components/Chat.jsx';
import '../styles/Chat.css';

const mapStateToProps = (state, ownProps) => ({
    ...state.chat
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;