import {combineReducers} from 'redux';
import search from './search';

const chatApp = combineReducers({search});

export default chatApp;