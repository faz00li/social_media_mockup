import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'Prop-Types';


function TweetTracker(props){
  console.log(props.tweetList);
  return (
    <div>
    <hr/>
    {props.tweetList.map((tweet) =>
      <Tweet name={tweet.name}
        tweet={tweet.tweetMSG}
        key={tweet.id} />
    )}
    </div> 
  );
}

TweetTracker.propTypes = {
  tweetList: PropTypes.array
}

export default TweetTracker;