import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { init as websocketInit, emit } from './actions/websocket'

function start_up() {

  // Do middleware stuff eventually

  let store = {};

  websocketInit(store);

  return store;
}

ReactDOM.render(
  <Provider>
    <App store={start_up()} />
  </Provider>,
  document.getElementById('root')
);
