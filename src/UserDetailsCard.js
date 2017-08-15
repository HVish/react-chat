import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import defaultImage from './user.png';

class UserDetailsCard extends Component {
    render() {
        return <Card>
            <CardMedia>
                <img src={this.props.image || defaultImage} alt="" />
            </CardMedia>
            <CardTitle title={this.props.name} subtitle={this.props.location} />
        </Card>;
    }
};

UserDetailsCard.propTypes = {
    userId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default UserDetailsCard;