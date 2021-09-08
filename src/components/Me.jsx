import React from 'react'
import '../styles/Web.scss';
import Mee from '../photos/me.png';
import Try from '../pages/Twitter';
import Weather from '../pages/weather'
import About from '../pages/about';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {NavLink} from "./Navbar/NavbarElements";
import '../styles/Me.css'
import TwitterPhoto from '../photos/twitterPhoto.png';
export default function Me() {
    return (
        <Router>
         <Switch>
         <Route path="/twitter" component={Try} />
         <Route path="/weather" component={Weather} />
         <Route path="/about" component={About} />


       
        <div>
        <div className='web'>
        <div className="left">
            <h1>Hello, I'm <span>Abdurrahman</span></h1>
            <p>I'm 19 years old from Syria who has been living in Istanbul Turkey since 2011, I'm a third year Software Engineering student who is always hungry to learn.<span><NavLink to="/about">Learn More...</NavLink></span></p>
        </div>
        <div className="right">
            <img src={Mee} alt="" />
        </div>
        </div>
        <div className="bg">
        <div className="project-title ">
                    <h2>Projects</h2>
                    
                </div>
            <div className="projects">
                
                <div className="projects-images">
                <div className="first-img">   <NavLink to='/twitter'>  <img src={TwitterPhoto} alt="" /> 
                <div className="overlay">Twitter</div>
                </NavLink>
                </div>

                
                <div className="second-img">  <NavLink to='/weather'>  <img src={TwitterPhoto} alt="" /> 
                <div className="overlay">Weather</div>
                </NavLink></div>
                <div className="third-img">  <NavLink to='#'>  <img src={TwitterPhoto} alt="" /> 
                <div className="overlay">Coming Soon</div>
                </NavLink></div>
                </div>
            </div>
  
    </div>
    </div>
    </Switch>
    </Router>
    
    )
}