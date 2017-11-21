import { connect } from 'react-redux';
import Search from '../components/Search.jsx';
import '../styles/Search.css';
import { filterChanged } from '../redux/actions/friendList';
import {
    searchFocus,
    searchFocusLoose,
    filterTextChange,
    backPressed
} from '../redux/actions/search';

const mapStateToProps = (state, ownProps) => ({
    ...state.search
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFocus: () => {
        dispatch(searchFocus(ownProps));
    },
    onKeyUp: (event) => {
        dispatch(filterTextChange(event.target.value));
        dispatch(filterChanged(event.target.value));
    },
    onBlur: () => {
        dispatch(searchFocusLoose(ownProps));
    },
    onBackPressed: () => {
        // reset filter
        dispatch(filterTextChange(''));
        dispatch(filterChanged(''));
        // reset input
        dispatch(backPressed());
    }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;