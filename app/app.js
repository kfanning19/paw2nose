import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './config/routes';

render((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
), document.getElementById('root'));

