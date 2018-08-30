import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import App from './components/App';
import Games from './components/Games';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducers from './reducers/index'
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
const store = createStore(rootReducers,composeWithDevTools(
    applyMiddleware(logger)
));

ReactDOM.render(
    <Provider store={store}>
      <Router>
          <div className='ui comtainer'>
           <div className='ui three item menu'>
             <NavLink activeClassName='active' exact className='item' to='/home'>home</NavLink>
             <NavLink activeClassName='active' exact className='item' to='/game'>game</NavLink>
             <NavLink activeClassName='active' exact  className='item' to='/newgame'>addNewGame</NavLink>
           </div>
           <Route exact path='/' component={App}/>
           <Route path='/games' component={Games}/>
          </div>
      </Router>
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
