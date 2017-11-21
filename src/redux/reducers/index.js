import { combineReducers } from 'redux';
import search from './search';
import friendList from './friendList';
import chat from './chat';

const chatApp = combineReducers({ search, friendList, chat });

export default chatApp;