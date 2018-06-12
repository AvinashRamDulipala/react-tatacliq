import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import PLP from './PLP';
 
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<PLP />,document.getElementById("App"));

registerServiceWorker();
