// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import PersonIcon from 'material-ui-icons/Person';
import Search from '../containers/SearchContainer.jsx';

class FriendList extends React.Component {

    onClick(friend) {
        this.props.onClick(friend);
    }

    render() {
        return <div>
            <div className={'friends-title'}>Friends</div>
            <Search/>
            <List>
                {this.props.filtered.map((friend, index) => {
                    return <ListItem
                        button
                        key={index}
                        onClick={this.onClick.bind(this, friend)}>
                        <Avatar><PersonIcon/></Avatar>
                        <ListItemText
                            className={'ellipsis'}
                            inset={true}
                            primary={friend.name}
                            secondary={friend.lastMsg}/>
                    </ListItem>
                })}
            </List>
        </div>;
    }
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired, 
            lastMsg: PropTypes.string.isRequired
        })
    ).isRequired,
    filtered: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired, 
            lastMsg: PropTypes.string.isRequired
        })
    ).isRequired
};

export default FriendList;