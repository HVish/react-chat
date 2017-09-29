import {
    SEARCH_FOCUS, 
    SEARCH_FOCUS_LOOSE, 
    FILTER_TEXT_CHANGE,
    BACK_PRESSED
} from '../actions/search';

const initState = {
    focused: false,
    filterText: ''
};

const search = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            return {
                ...state,
                focused: true
            };
        case SEARCH_FOCUS_LOOSE:
            return {
                ...state,
                focused: !!state.filterText || false
            };
        case FILTER_TEXT_CHANGE:
            return {
                ...state,
                filterText: action.payload
            };
        case BACK_PRESSED: 
            return {
                ...state,
                focused: false,
                filterText: ''
            };
        default:
            return state
    }
}

export default search;