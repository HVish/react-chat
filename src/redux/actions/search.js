// actions
export const SEARCH_FOCUS = 'SEARCH_FOCUS';
export const SEARCH_FOCUS_LOOSE = 'SEARCH_FOCUS_LOOSE';
export const FILTER_TEXT_CHANGE = 'FILTER_TEXT_CHANGE';
export const BACK_PRESSED = 'BACK_PRESSED';

// action creaters
export const searchFocus = (payload) => ({ type: SEARCH_FOCUS, payload });
export const filterTextChange = (payload) => ({ type: FILTER_TEXT_CHANGE, payload });
export const searchFocusLoose = (payload) => ({ type: SEARCH_FOCUS_LOOSE, payload });
export const backPressed = (payload) => ({ type: BACK_PRESSED, payload });