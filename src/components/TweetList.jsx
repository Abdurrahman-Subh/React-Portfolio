import React from 'react';
import Tweet from './Tweet';
import '../styles/TweetList.scss';


const TweetList = ({name1, tweets, setTweets}) => {
   
    return (
        <div className="tweet-list">
            {tweets.map(tweet => 
            <Tweet
            setTweets={setTweets}
            name1={name1}
            tweet={tweet}
            tweets={tweets}
            key={tweet.id}
            />)}
           
        </div>
    );
};
export default TweetList;
