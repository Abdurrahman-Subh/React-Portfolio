import React, {useState} from 'react';
import styles from '../styles/LoginFormm.module.css';
import Wave from '../photos/wave.png'
import Bg from '../photos/bg.svg';
import Avatar from '../photos/avatar.svg';




 function LoginForm({Login, error}) {

    const [details, setDetails] = useState({name: '', email: '', password: ''});
    
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div className={styles.loginFormBg}>
       <img className={styles.wave} src={Wave} />
	<div className={styles.container}>
		<div className={styles.img}>
			<img src={Bg} />
		</div>
		<div className={styles.loginContent}>
			<form className={styles.form} onSubmit={submitHandler}>
				<img src={Avatar} />
				<h2 className={styles.title}>Welcome</h2>
                {(error != "") ? (<div className={styles.error}>{error}</div>) : ""}
           		<div className={`${styles.inputDiv } ${styles.one}`}>
           		   
           		   <div className={styles.div}>
                     
           		   		<input placeholder="Email" className={styles.input} type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
           		   </div>
           		</div>
           		<div className={`${styles.inputDiv} ${styles.pass}`}>
           		   
           		   <div className={styles.div}>
           		    	
           		    	<input placeholder="Password" className={styles.input} type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            	   </div>
            	</div>
            	<a href="">Forgot Password?</a>
            	<input type="submit" className={styles.btnLogin} value="Login" />
            </form>
        </div>
    </div>     
       
        </div>
    )
}
export default LoginForm;