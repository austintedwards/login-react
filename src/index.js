import React from 'react';
import ReactDOM from 'react-dom';
import './Main/index.css';
import App from './Main/App';
import registerServiceWorker from './Main/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
