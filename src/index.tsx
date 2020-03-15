import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './utils/serviceWorker';
import { initReactAxe } from './utils/reactAxe';
import { Env } from './types/env';
import App from './app';

if (process.env.NODE_ENV !== Env.prod) {
  initReactAxe(React, ReactDOM);
}

const app = <App />;
const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.render(app, root);

serviceWorker.register();
