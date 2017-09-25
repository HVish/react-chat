import {SEARCH_FOCUS, SEARCH_FOCUS_LOOSE} from '../actions/search';

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
        default:
            return state
    }
}

export default search;