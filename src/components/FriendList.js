// @flow weak

import React from 'react';
import './FriendList.css';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import PersonIcon from 'material-ui-icons/Person';
import Search from '../containers/SearchContainer.jsx';

class FriendList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friends: this.props.friends
        };
    }

    render() {
        return <div>
            <div className={'friends-title'}>Friends</div>
            <Search />
            <List>
                {this
                    .props
                    .friends
                    .map((friend, index) => {
                        return <ListItem button key={index}>
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
    friends: PropTypes.array.isRequired
};

export default FriendList;