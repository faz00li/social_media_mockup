import React from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

function Header() {

  return (
    <div>
      <style jsx>{`
        div {
          padding-top: 15px;
          background-color: black;
        }
        .jumbotron {
          padding-top: 10px !important;
          padding-bottom: 10px !important;
        }
      `}</style>
      
      
        <div className="jumbotron">
          <h1 className="display-1 text-center">Social Scroll</h1>
        </div>
        <Navbar/>
    </div>
    
  );
};

export default Header;

