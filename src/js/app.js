import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers'
import App from './components/App.jsx';
import { emit } from './actions/websocket';


function start_up() {

  // Do middleware stuff eventually

  let store = createStore(app);

  return store;
}

ReactDOM.render(
  <Provider store={start_up()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
