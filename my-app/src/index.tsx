/**
 * The application index file
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.addEventListener('error', error => console.error(error));

ReactDOM.render(<App />, document.getElementById('container'));
