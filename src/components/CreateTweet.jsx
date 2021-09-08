import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Create.scss';


const CreateTweet = ({tweets, setTweets, textInput,SetTextInput}) => {
   
    //Functions
    const userInputHandler = (e) => {
        SetTextInput(e.target.value);
    };
    const submitTweetHandler = (e) =>{
        e.preventDefault();
        setTweets([...tweets, {message: textInput, id: uuidv4()}]);
        SetTextInput('');
        
    }
    return (
        <div className="form">
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput}
             onChange={userInputHandler}
              cols="50" rows="5"
              placeholder="Enter Tweet"
              ></textarea>
            <button className="submit-tweet">Submit</button>
            
        </form>
        </div>
    );
};
export default CreateTweet;