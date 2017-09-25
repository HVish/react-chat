// actions
export const SEARCH_FOCUS = 'SEARCH_FOCUS';
export const SEARCH_FOCUS_LOOSE = 'SEARCH_FOCUS_LOOSE';
export const FILTER_TEXT_CHANGE = 'FILTER_TEXT_CHANGE';

// action creaters
export const searchFocus = (payload) => ({ type: SEARCH_FOCUS, payload });
export const filterTextChange = (payload) => ({ type: FILTER_TEXT_CHANGE, payload });
export const searchFocusLoose = (payload) => ({ type: SEARCH_FOCUS_LOOSE, payload });