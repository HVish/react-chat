// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import SearchIcon from 'material-ui-icons/Search';

class Search extends React.Component {

    render() {
        let placeholder = '';
        let Icon = ArrowBackIcon;

        if (!this.props.focused) {
            placeholder = 'Search friends';
            Icon = SearchIcon;
        }

        return <div className={'search-wrapper'}>
            <div className={'search'}>
                <Icon/>
                <div
                    className={'search-input'}
                    contentEditable={true}
                    onFocus={this.props.onFocus}
                    onKeyUp={this.props.onKeyUp}
                    onBlur={this.props.onBlur}
                    placeholder={placeholder}/>
            </div>
        </div>;
    }
}

Search.propTypes = {
    focused: PropTypes.bool,
    filterText: PropTypes.string
};

export default Search;