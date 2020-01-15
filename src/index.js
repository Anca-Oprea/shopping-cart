import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 
'react-router-dom';
import {ProductProvider} from './context.js';
import './index.css';
import App from './App.js';


ReactDOM.render(
<ProductProvider>
<Router>
<App />
</Router>
</ProductProvider>
, document.getElementById('root'));

