import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import store from './redux/store/configStore';

import "semantic-ui-css/semantic.css";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
