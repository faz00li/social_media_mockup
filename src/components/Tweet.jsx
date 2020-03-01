import React from "react";
import PropTypes from "prop-types";

function Tweet(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p><em>{props.tweet}</em></p>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired
};

export default Tweet;