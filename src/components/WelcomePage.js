import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <p className="largeText">Welcome!</p>
      <p className="smallText">This boilerplate contains react, redux and react router v4 setup.</p>
      <div className="packages-button">
        <Link to="/packages">Test Routing</Link>
      </div>
    </div>
  );
}

export default WelcomePage;