import React from 'react';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Description from './Description';
import TweetTracker from './TweetTracker';
import TweetCreator from './TweetCreator';
import ColorPicker from './ColorPicker';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tweetList: []
    };
    this.handleAddTweet = this.handleAddTweet.bind(this);
  }

  handleAddTweet(newTweet){
    var newTweetList = this.state.tweetList.slice();
    newTweetList.push(newTweet);
    this.setState({tweetList: newTweetList});
  }
  
  render(){
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
                <Route exact path = '/' render = {()=><TweetTracker tweetList = {this.state.tweetList} />}/>
                <Route path = '/new' render = {()=><TweetCreator onNewTweetCreation = {this.handleAddTweet} />} />
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
    
}

export default App;
