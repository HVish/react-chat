// actions
export const SEARCH_FOCUS = 'SEARCH_FOCUS';
export const SEARCH_FOCUS_LOOSE = 'SEARCH_FOCUS_LOOSE';

// action creaters
export const searchFocus = (payload) => ({ type: SEARCH_FOCUS, payload });
export const searchFocusLoose = (payload) => ({ type: SEARCH_FOCUS_LOOSE, payload });