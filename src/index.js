import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './middleware/configureStore'
import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const store = configureStore()

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={App} />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
