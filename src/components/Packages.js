import React from 'react';

const Packages = ({ packages }) => {
  return (
    <div className="container">
      <p className="smallText">Rendering this list from the redux store.</p>
      <ul className="unorderList">
        {packages.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>  
    </div>
  );
};

export default Packages;