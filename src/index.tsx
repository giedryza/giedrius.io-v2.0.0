import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './utils/serviceWorker';
import { Env } from './types/env';
import { initReactAxe } from './utils/reactAxe';
import App from './app';

if (process.env.NODE_ENV === Env.dev) {
  initReactAxe(React, ReactDOM);
}

const app = <App />;
const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.render(app, root);

serviceWorker.register();
