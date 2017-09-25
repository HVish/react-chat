// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import SearchIcon from 'material-ui-icons/Search';

class Search extends React.Component {
    render() {
        return <div className={'search-wrapper'}>
            <div className={'search'}>
                {this.props.focused
                    ? <ArrowBackIcon className={'search-icon'}/>
                    : <SearchIcon className={'search-icon'}/>}
                <div
                    className={'search-input'}
                    contentEditable={true}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}/>
            </div>
        </div>;
    }
}

Search.propTypes = {
    focused: PropTypes.bool,
    filterText: PropTypes.string,
};

export default Search;