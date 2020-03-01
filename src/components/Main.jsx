import React from 'react';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';
import Description from './Description';
import TweetTracker from './TweetTracker';
import ColorPicker from './ColorPicker';

function Main() {

  return (
    <div>
      <style jsx>{`
        div {
          padding-top: 15px;
        }
      `}</style>
       <div className="container-fluid">

  <div className="row rod-flex flex-row">
    <div className="col-sm-4 justify-content-center">
      <ProfileCard/>
      <Description/>
    </div>
    <div className="col-sm-4 justify-content-center">
      <h3>Tweet Tracker</h3>
      <TweetTracker/>
    </div>
    <div className="col-sm-4 justify-content-center">
      <h3>Color Picker From React</h3>
      <ColorPicker/>
    </div>
  </div>
</div>
     
    </div>
  );
};

export default Main;

