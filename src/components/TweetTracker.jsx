import React from 'react';
import Tweet from './Tweet';

var masterTweetList = [
  {
    name: "Eddie",
    tweet: "1 tweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero nihil eveniet dolorem odit, ea nisi id incidunt iure repellat suscipit, ut esse in magnam fugit exercitationem dolor. Sed, provident! "
  },
  {
    name: "Bobby",
    tweet: "2 tweet tweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero nihil eveniet dolorem odit, ea nisi id incidunt iure repellat suscipit, ut esse in magnam fugit exercitationem dolor. Sed, provident!"
  },
  {
    name: "Jimmy",
    tweet: "3 tweet tweet tweeet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero nihil eveniet dolorem odit, ea nisi id incidunt iure repellat suscipit, ut esse in magnam fugit exercitationem dolor. Sed, provident!"
  },
  {
    name: "Tommy",
    tweet: "1 tweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero nihil eveniet dolorem odit, ea nisi id incidunt iure repellat suscipit, ut esse in magnam fugit exercitationem dolor. Sed, provident! "
  },
  {
    name: "Jerry",
    tweet: "2 tweet tweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero nihil eveniet dolorem odit, ea nisi id incidunt iure repellat suscipit, ut esse in magnam fugit exercitationem dolor. Sed, provident!"
  },
  {
    name: "Gary",
    tweet: "3 tweet tweet tweeet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero nihil eveniet dolorem odit, ea nisi id incidunt iure repellat suscipit, ut esse in magnam fugit exercitationem dolor. Sed, provident!"
  },
  {
    name: "Freddie",
    tweet: "1 tweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero nihil eveniet dolorem odit, ea nisi id incidunt iure repellat suscipit, ut esse in magnam fugit exercitationem dolor. Sed, provident! "
  },
  {
    name: "Johnny",
    tweet: "2 tweet tweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero nihil eveniet dolorem odit, ea nisi id incidunt iure repellat suscipit, ut esse in magnam fugit exercitationem dolor. Sed, provident!"
  },
  {
    name: "Louie",
    tweet: "3 tweet tweet tweeet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero nihil eveniet dolorem odit, ea nisi id incidunt iure repellat suscipit, ut esse in magnam fugit exercitationem dolor. Sed, provident!"
  }
];

function TweetTracker(){
  return (
    <div>
    <hr/>
    {masterTweetList.map((tweet, index) =>
      <Tweet name={tweet.name}
        tweet={tweet.tweet}
        key={index} />
    )}
    </div> 
  );
}

export default TweetTracker;