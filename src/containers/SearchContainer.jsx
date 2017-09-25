import {connect} from 'react-redux';
import Search from '../components/Search.jsx';
import '../styles/Search.css';
import {searchFocus, searchFocusLoose, filterTextChange} from '../redux/actions/search';
import {filterChanged} from '../redux/actions/friendList';

const mapStateToProps = (state, ownProps) => ({
    ...state.search
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFocus: () => {
        dispatch(searchFocus(ownProps));
    },
    onKeyUp: (event) => {
        dispatch(filterTextChange(event.target.innerText));
        dispatch(filterChanged(event.target.innerText));
    },
    onBlur: () => {
        dispatch(searchFocusLoose(ownProps));
    }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;