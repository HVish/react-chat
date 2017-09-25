import {connect} from 'react-redux';
import {searchFocus, searchFocusLoose} from '../redux/actions/search';
import Search from '../components/Search.jsx';
import '../styles/Search.css';

const mapStateToProps = (state, ownProps) => ({
    ...state.search
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFocus: () => {
        dispatch(searchFocus(ownProps));
    },
    onBlur: () => {
        dispatch(searchFocusLoose(ownProps));
    }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;