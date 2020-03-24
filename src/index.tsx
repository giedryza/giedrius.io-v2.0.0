import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from 'utils/serviceWorker';
import App from 'app';

const app = <App />;
const root = document.getElementById('root') as HTMLDivElement;

render(app, root);

serviceWorker.register();
