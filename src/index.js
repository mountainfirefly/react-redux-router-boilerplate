import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import store from './store';

import './index.css';

const App = () => {
  return (
    <Router store={store} />
  );
};


ReactDOM.render(<App />, document.getElementById("index"));