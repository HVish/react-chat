// @flow weak

import React from 'react';
import './FriendList.css';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import PersonIcon from 'material-ui-icons/Person';

const styles = theme => ({
    root: {
        background: theme.palette.background.paper
    }
});

class FriendList extends React.Component {
    render() {
        const classes = this.props.classes;
        return <div className={classes.root}>
            <div className={'friends-title'}>Friends</div>
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
    classes: PropTypes.object.isRequired,
    friends: PropTypes.array.isRequired
};

export default withStyles(styles)(FriendList);