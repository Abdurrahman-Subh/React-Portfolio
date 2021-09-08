import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElementsMain";
function Navbar ({Logout}) {
    const refreshPage = ()=>{
        window.location.reload();
     }
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Abdurrahman
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/twitter" activeStyle>
                    Try Our Twitter
                </NavLink>
                <NavLink to="/weather" activeStyle>
                   Try Out Weather
                </NavLink>
            
                <NavBtn>
                    <NavBtnLink onClick={refreshPage} to="/">Log Out</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;