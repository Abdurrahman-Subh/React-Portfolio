import React, {useState} from 'react';
import '../styles/Tweet.scss';

const Tweet = ({name1, tweet, tweets, setTweets}) => {
    const deleteTweet = () =>{
        setTweets(tweets.filter((state) => state.id !== tweet.id));
    };
    const [counter, setCounter] = useState(0);
    return (
     
        <div className="tweet">
            <h2>{name1}</h2>
            <h3>{tweet.message}</h3>
            <div className="btns">
            <button onClick={() => setCounter(counter +1)}>{counter} Like</button>
            <button onClick={deleteTweet}>Delete</button>
            </div>
            
        </div>
     
        
    );
};
export default Tweet;