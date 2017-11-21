// actions
export const FILTER_CHANGED = 'FILTER_CHANGED';
export const FRIEND_SELECTED = 'FRIEND_SELECTED';

// action creaters
export const filterChanged = (payload) => ({ type: FILTER_CHANGED, payload });
export const friendSeleted = (payload) => ({ type: FRIEND_SELECTED, payload });