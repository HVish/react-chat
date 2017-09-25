import {SEARCH_FOCUS, SEARCH_FOCUS_LOOSE, FILTER_TEXT_CHANGE} from '../actions/search';

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
                focused: false
            };
        case FILTER_TEXT_CHANGE:
            return {
                ...state,
                filterText: action.payload
            };
        default:
            return state
    }
}

export default search;