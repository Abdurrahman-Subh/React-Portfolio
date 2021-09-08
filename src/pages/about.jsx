import React from "react";
import Kodluyoruz from '../photos/kodluyoruz.png';
import styles from '../styles/AboutStyle.module.css'
import JsIcon from '../photos/js.png';
import Html from '../photos/html.png';
import Boot from '../photos/bootcamp1.jpg';

const About = () => {
    return (
        <div className={styles.about}>
            <div className= {`${styles.mainHeader} ${styles.divs}`}>
                <h1>My Name Is Abdurrahman</h1>
                <div className={styles.aboutMe}>
                    <p>I'm 19 years old from Syria who has been living in Istanbul Turkey since 2011, I'm a third year Software Engineering student who is always hungry to learn, I’m trying always to improve my-self and tries to participate and organize different activities to meet new technologies, I think that everybody’s job is to always to search and develop, I’m always curious to learn and passionate about my job. I can speak 3 Languages fluently (Arabic, English, Turkish) and that makes me a strong communicator.
</p>
                </div>
            </div>
           <div  className={`${styles.skills} ${styles.divs}`}>
            <div classNameName={`${styles.do} ${styles.divs}`}>
            <div className="skills-section">
    <div className={styles.skillsHeader}>
     <h1>My Coding Skills</h1>   
     </div>
     <div className={styles.skillsContainer}>
       
      <div className={styles.skillsBox}>
       <div className={styles.skillsTitle}>
       <div className={styles.skillsImg}>
        <img src={Html} alt="" className={styles.skillsIcons} />
        </div>
         <h3>HTML 5</h3>
        </div>
       
       </div>
       
       
        <div className={styles.skillsBox}>
       <div className={styles.skillsTitle}>
       <div className={styles.skillsImg}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" className={styles.skillsIcons}/>
        </div>
        <h3>CSS3</h3>
        </div>
          
       </div>
       
       
        <div className={styles.skillsBox}>
       <div className={styles.skillsTitle}>
       <div className={styles.skillsImg}>
        <img src={JsIcon} alt="" style={{width: "70px"}} className={styles.skillsIcons} />
        </div>
        <h3>JAVASCRIPT</h3>
        </div>
       
       </div>
       
          {/* <div className={styles.skillsBox}>
       <div className={styles.skillsTitle}>
       <div className={styles.skillsImg}>
        <img src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" className={styles.skillsIcons} />
        </div>
        <h3>NODE.JS</h3>
        </div>
       
       </div> */}
       
          <div className={styles.skillsBox}>
       <div className={styles.skillsTitle}>
       <div className={styles.skillsImg}>
        <img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="" style={{width: "50px"}} className={styles.skillsIcon} />
        </div>
        <h3>REACT</h3>
        </div>
       
       </div>
       
        
       
       </div>
    
     </div>
            </div>
            </div>
            
            {/* <div className={styles.projectTitle}  >
                    <div className={styles.firstProjectTitle}><h2>First</h2></div>
                    <div className={styles.secondProjectTitle}><h2>Second</h2></div>
                    <div className={styles.thirdProjectTitle}><h2>Third</h2></div>
                </div>
            <div className={styles.projects}>
                
                <div className={styles.projectsImages}>
                <div className={styles.firstImg}> <img src={Webb} alt="" /></div>
                <div className={styles.secondImg}> <img src={Webb} alt="" /></div>
                <div className={styles.thirdImg}> <img src={Webb} alt="" /></div>
                </div>
                
                </div> */}
            
            <div className={`${styles.bootcamp} ${styles.divs}`} style={{paddingTop: '100px'}}>
                <div className={styles.bootcampTitle}><h1>Bootcamps</h1></div>
                <div className={styles.bootcampImg}>
                    <div className={styles.imgCol}>
                   <a href="https://verified.cv/en/verify/52992110051220" target="_blank"><img src={Boot} alt="" /></a> 
                   
                    </div>
                    
                    <div className={styles.imgCol}>
                    <img style={{filter: 'blur(9.08px) invert(0.32)'}} src={Boot} alt="" />
                   
                    </div>
                    <div className={styles.imgCol}>
                    <img style={{filter: 'blur(9.08px) invert(0.32)'}} src={Boot} alt="" />
                    
                    </div>
                    
                </div>
                <div className={`${styles.bootcampP} ${styles.divs}`} style={{paddingTop: '150px'}}>
                    <div className={styles.firstBootcampP}><h3>Kodluyoruz</h3></div>
                    <div className={styles.secondBootcampP}><h3>Coming Soon</h3></div>
                    <div className={styles.thirdBootcampP}><h3>Coming Soon</h3></div>
                </div>
            </div>
            <div className={styles.thankKod}>
                <div className={styles.thankLeft}><h1>A Special Thanks To Kodluyoruz Team</h1></div>
                <div className={styles.thankRight}><img src={Kodluyoruz} alt="" /></div>
                   
                   
                
                
            </div>
        </div>
    );
};

export default About;