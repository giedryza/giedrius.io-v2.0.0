import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.component';
import * as serviceWorker from './utils/serviceWorker';

const app = <App />;
const root = document.getElementById('root');

ReactDOM.render(app, root);

serviceWorker.register();
