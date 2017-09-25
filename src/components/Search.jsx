// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import SearchIcon from 'material-ui-icons/Search';

class Search extends React.Component {
    render() {
        const filterApplied = this.props.filterText || this.props.focused;
        const placeholder = filterApplied
            ? ''
            : 'Search friends';
        return <div className={'search-wrapper'}>
            <div className={'search'}>
                {filterApplied
                    ? <ArrowBackIcon className={'search-icon'}/>
                    : <SearchIcon className={'search-icon'}/>}
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