import React, {useState} from 'react';
import '../styles/Home.scss';
import CreateTweet from '../components/CreateTweet';
import TweetList from '../components/TweetList';


const Twitter = () => {
  const [textInput, SetTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const [name1, setName1] =  useState('Dev Abdurrahman');
  return (    
    <div className="body">
      <h1>Welcome {name1}!</h1>
      <div className="tweet-con">
        
      <CreateTweet textInput={textInput}
      SetTextInput={SetTextInput}
      tweets={tweets}
      setTweets={setTweets} 
       />
     <TweetList setName1={setName1} name1={name1} tweets={tweets} setTweets={setTweets} />
     </div>
     </div>
    
  );
};

export default Twitter;