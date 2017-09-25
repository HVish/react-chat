import {connect} from 'react-redux';
import FriendList from '../components/FriendList.jsx';
import '../styles/FriendList.css';

const mapStateToProps = (state, ownProps) => ({
    ...state.friendList
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList);

export default FriendListContainer;