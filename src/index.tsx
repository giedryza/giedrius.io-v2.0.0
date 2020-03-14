import React from 'react';
import ReactDOM from 'react-dom';
import App from './sections/app/app.component';
import * as serviceWorker from './utils/serviceWorker';

const app = <App />;
const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.render(app, root);

serviceWorker.register();
