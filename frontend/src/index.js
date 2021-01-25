import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { createBrowserHistory } from "history";

const history = createBrowserHistory(); 

ReactDOM.render(
  <Router history={history}>
    <AnimatePresence>
      <App/>
    </AnimatePresence>
  </Router>,
  document.getElementById('root')
);