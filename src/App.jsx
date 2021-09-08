import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.scss';
import Try from './pages/Twitter';
import About from './pages/about';
import Weather from './pages/weather';
import Me from './components/Me';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

function App() {
   //State
   const adminUser = {
     email: 'admin@admin.com',
     password: 'admin123'
   }
   const [user, setUser] = useState({name: '', email: ''});
   const [error, setError] = useState('');
   const Login = details => {
     console.log(details);

     if(details.email == adminUser.email && details.password == adminUser.password){
       console.log('Logged In');
       setUser({
         name: details.name,
         email: details.email
       });
     }
     else{
       console.log("Details Do not match!");
       setError("Details Do not match!");
     }
   }
   const Logout = () => {
      setUser({name: '', email: ''});
   }
  
  return (
    
    <div className="every">
      {(user.email != '') ? (
         <Router>
         <Navbar />
       
         <Switch>
         <Route path="/weather" component={Weather} />
        
         
           <Route path="/" exact component={Me} />
           <Route path="/about" component={About} />
           <Route path="/twitter" component={Try} />
           <Route path="/weather" component={Weather} />
           <Route path="/login" component={LoginForm} />
           
         </Switch>
         <Footer />
       </Router>
       
      
      ): (
        <LoginForm Login={Login} error={error}  />
      )}
    
     </div>
 
    
  );
}

export default App;
