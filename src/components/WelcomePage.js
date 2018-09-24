import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <p className="largeText">React Redux React-Router-v4 boilerplate.</p>
      <div className="packages-button">
        <Link to="/packages">Test Routing</Link>
      </div>
      <p style={{ textAlign: 'center' }}>Source on <a target="_blank" href="https://github.com/mountainfirefly/react-redux-router-boilerplate">GITHUB</a> By <a target="_blank" href="https://github.com/mountainfirefly">Pankaj</a></p>
      <a target="_blank" href="https://github.com/mountainfirefly"><img style={{ position: 'absolute', top: 0, right: 0, border: 0}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub"/></a>
    </div>
  );
}

export default WelcomePage;