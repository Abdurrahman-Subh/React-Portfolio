import React, {useState} from 'react';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.scss';
import Try from './pages/Twitter';
import About from './pages/about';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Weather from './pages/weather';
import Me from './components/Me';

function App() {
   //State
  
  return (
    
    <div>
      <Router>
      <Navbar />
    
      <Switch>
      <Route path="/weather" component={Weather} />
     
      
        <Route path="/" exact component={Me} />
        <Route path="/about" component={About} />
        <Route path="/twitter" component={Try} />
        <Route path="/weather" component={Weather} />
        <Route path="/signin" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
    
     </div>
 
    
  );
}

export default App;
