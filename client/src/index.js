import React from 'react';

// create the main store
import configureStore from './store/configureStore';
const store = configureStore();

// initialize react router to sync history with store
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(browserHistory, store);

// render root container
import { render } from 'react-dom';
import Root from './containers/Root';
render(
  <Root store={store} history={history}/>,
  document.getElementById('react')
);
