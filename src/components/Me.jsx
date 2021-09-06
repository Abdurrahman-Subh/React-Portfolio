import React from 'react'
import '../styles/Web.scss';
import Mee from '../photos/me.png';
import Webb from '../photos/web.png';
export default function Me() {
    return (
        <div className='web'>
        <div className="left">
            <h1>Hello, I'm <span>Abdurrahman</span></h1>
            <p>I'm 19 years old from Syria who has been living in Istanbul Turkey since 2011, I'm a third year Software Engineering student who is always hungry to learn, I’m trying always to improve my-self and tries to participate and organize different activities to meet new technologies.</p>
        </div>
        <div className="right">
            <img src={Mee} alt="" />
        </div>
        <div className="right">
                <img src={Webb} alt="" />
            </div>
            <div className="left">
                <h1>The Internet</h1>
                <p>People all over the world are connected through the Internet. News or any information for that matter travels through the Internet. This is how we keep ourselves updated with information.</p>
            </div>
    </div>
    
    )
}