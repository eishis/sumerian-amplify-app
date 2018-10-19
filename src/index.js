import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import config from './aws-exports';

Amplify.configure(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
