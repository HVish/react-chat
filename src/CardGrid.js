import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserDetailsCard from './UserDetailsCard';
import Grid from 'material-grid/dist/Grid/Grid';
import Cell from 'material-grid/dist/Grid/Cell';

class CardGrid extends Component {
    render() {
        return <Grid className="row">
            {
                this.props.users.map(function (user) {
                    return <Cell key={user.userId} col={2} tablet={2} phone={12}>
                        <UserDetailsCard {...user} />
                    </Cell>;
                })
            }
        </Grid>;
    }
}

CardGrid.propTypes = {
    users: PropTypes.array.isRequired
};

export default CardGrid;
