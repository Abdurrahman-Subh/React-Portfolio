import React from 'react';
import './Side.css';
import {Link} from 'react-router-dom';



 function Sidebar() {
     const navStyle = {
         color: '#fff'
     };
    return (
        <nav className="navv">
           
            <ul className="nav-links">
                <Link  to='/'>
                <li>Home</li>
                </Link >
                <Link const style={navStyle} to='/weather'>
                <li >Weather</li>
                </Link >
              

            </ul>
        </nav>
    )
}
export default Sidebar;