import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Auth0Wrapper from './Auth0Wrapper';
import { Provider } from 'react-redux';
import store from './store';

render(
  <Auth0Wrapper
    domain="zachbutler.auth0.com"
    client_id="8DvdihIa7YAWLEfuXZI7uqTAGAPKvYhj"
    redirect_uri="http://localhost:7890"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Wrapper>,
  document.getElementById('root')
);
