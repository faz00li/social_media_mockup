import React from 'react';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Description from './Description';
import TweetTracker from './TweetTracker';
import TweetCreator from './TweetCreator';
import ColorPicker from './ColorPicker';
import {Switch, Route} from 'react-router-dom';



function App(){
  return (
    <div className="container-fluid">
      <Header/>
        <div className="row rod-flex flex-row">
          <style jsx>{`
            div {
              padding-top: 5px;
            }
          `}</style>
          <div className="col-sm-4 justify-content-center">
            <ProfileCard/>
            <Description/>
          </div>
          <div className="col-sm-4 justify-content-center">
            <h3>Tweet Tracker</h3>
            <Switch>
              <Route exact path = '/'  component={TweetTracker}/>
              <Route path = '/new' component={TweetCreator} />} />
              {/* <Route component = {Error404} /> */}
            </Switch>
          </div>
          <div className="col-sm-4 justify-content-center">
            <h3>Color Picker From React</h3>
            <ColorPicker/>
          </div>
        </div>
    </div>
  );
}

export default App;
