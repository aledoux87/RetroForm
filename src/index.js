import React, { StrictMode } from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
// import store from './redux/store';
import './reset.css';
import './index.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
