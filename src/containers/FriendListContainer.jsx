import { connect } from 'react-redux';
import FriendList from '../components/FriendList.jsx';
import { friendSeleted } from '../redux/actions/friendList';
import { chatSeleted } from '../redux/actions/chat';
import '../styles/FriendList.css';

const mapStateToProps = (state, ownProps) => ({
    ...state.friendList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (friend) => {
        dispatch(friendSeleted(friend));
        dispatch(chatSeleted(friend));
    }
});

const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList);

export default FriendListContainer;