import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './utils/serviceWorker';
import { Env } from './types/env';
import App from './app';

if (process.env.NODE_ENV !== Env.prod) {
  const TIMING_DELAY = 1000;
  // eslint-disable-next-line global-require
  const axe = require('react-axe');
  axe(React, ReactDOM, TIMING_DELAY);
}

const app = <App />;
const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.render(app, root);

serviceWorker.register();
