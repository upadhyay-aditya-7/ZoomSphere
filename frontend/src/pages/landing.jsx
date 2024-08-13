import React from 'react';
import {Link} from 'react-router-dom';

function LandingPage() {
    return ( 
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>ZoomSphere</h2>
                </div>
                <div className='navList'>
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h2><span style={{color: "#FF9839"}}>Connect</span> with your Loved Ones</h2>
                    <p>Cover a distance by ZoomSphere</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src='/mobile.png' alt='mobile'/>
                </div>
            </div>
        </div>
     );
}

export default LandingPage;