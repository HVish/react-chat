import {combineReducers} from 'redux';
import search from './search';
import friendList from './friendList';

const chatApp = combineReducers({search, friendList});

export default chatApp;