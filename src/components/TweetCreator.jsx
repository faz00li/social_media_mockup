import React from 'react';
import PropTypes from  'prop-types';
import { v4 } from 'uuid';

function TweetCreator(props) {
  let _name = null;
  let _tweet = null;
 
  function handlePostTweet(event) {
    event.preventDefault();
    console.log(_name.value, _tweet.value);
    props.onNewTweetCreation({name: _name.value, tweet: _tweet.value, id: v4()});
    _name.value = '';
    _tweet.value = '';
  }

  return (
    <div>
      <form onSubmit = {handlePostTweet}>
        <input
          type = 'text'
          id = 'names'
          placeholder = 'a' 
          ref = {(input) => {_name = input;}}/>
        <textarea
          type = 'text'
          id = 'nametweet'
          placeholder = 'tweet away' 
          ref = {(textarea) => {_tweet = textarea;}}/>
        <button type = 'submit'>Post</button>
      </form>
    </div>
  );
}

TweetCreator.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default TweetCreator;