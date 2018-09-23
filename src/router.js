import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WelcomePage from './components/WelcomePage';
import Packages from './containers/Packages';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/packages" component={Packages} />
        </div>
      </Router>
    </Provider>
  );
};

export default Root;