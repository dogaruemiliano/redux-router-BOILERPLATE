import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { createBrowserHistory as history } from 'history'

import App from './components/App';
import '../public/stylesheet/index.scss'

import configureStore from './store/configureStore'

const initialState = {
  //cities: []
}


ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <Router histroy={histroy}>
      <Switch>
        TODO
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
