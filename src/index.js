import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './App';
import chatApp from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(chatApp);

render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
