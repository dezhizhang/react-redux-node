import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducers from './reducers/index'
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducers,composeWithDevTools(
    applyMiddleware(logger)
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
