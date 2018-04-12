import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

import App from './views/App';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
