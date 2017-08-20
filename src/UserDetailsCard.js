import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import defaultImage from './user.png';
import { cyan500, white, black } from 'material-ui/styles/colors';

class UserDetailsCard extends Component {

    constructor(props) {
        super(props);
        this.state = { selected: false };
    }

    handleClick = (params) => {
        this.setState({ selected: this.state.selected ? false : true });
    };

    getStyles = () => {
        if (this.state.selected) {
            return { background: cyan500, cursor: 'pointer' };
        }
        return { background: white, cursor: 'pointer' };
    }

    render() {
        return <Card style={this.getStyles()} onClick={this.handleClick}>
            <CardMedia style={{ padding: 20 }}>
                <img src={this.props.image || defaultImage} alt="" />
            </CardMedia>
            <CardHeader title={this.props.name} subtitle={this.props.location} />
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