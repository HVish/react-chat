// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import FilterIcon from './FilterIcon';

class Search extends React.Component {

    render() {
        let placeholder = 'Search friends';
        const wrapperClass = ['search-wrapper'];
        if (this.props.focused) {
            placeholder = '';
            wrapperClass.push('active');
        }
        return <div className={wrapperClass.join(' ')}>
            <div className={'search'}>
                <FilterIcon active={this.props.focused}/>
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