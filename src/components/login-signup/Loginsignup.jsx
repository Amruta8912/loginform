import React, { useState } from "react";
import  './Loginsignup.css';
import photo from '../assests/photo.svg';
import bg from '../assests/bg.jpg';
import google from '../assests/google.png';
import  Logo_of_Twitter from '../assests/Logo_of_Twitter.svg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock,faEnvelope,faMobile,faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';




const Loginsignup=()=>{

  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [valid, setValid] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePasswordsMatch(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePasswordsMatch(password, newConfirmPassword);
  };

  const validatePasswordsMatch = (password, confirmPassword) => {
    const isValid = password === confirmPassword && password !== '' && confirmPassword !== '';
    setValid(isValid);
  };

    return(
        <>
 <div className="container">

        <div className="card">
        <div className="head">
        <img src={photo} height='200' ></img>
          <h1>Welcome back!</h1>
          <p>Sign in to your account to continue</p>
        </div>

        <div className="input-container">
      <div className="icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <input type="email" placeholder="Enter Email Id" className="input-with-icon" id="user"  required />
 
    </div>

    <br/>
        
      <div className="input-container">
      <div className="icon">
        <FontAwesomeIcon icon={faLock} />
      </div>
      <input type="password" placeholder="Enter Password" name="password"  value={password}
        onChange={handlePasswordChange} 
        className="input-with-icon" maxLength='8' minLength='8' required />
        <p id="pass">Password must be at least 8 characters  </p>
       </div>
       
       <div className="link">
        <a href="#" >Forgot Password?</a>
       </div>

       <button className="btn1">Sign In</button>

      <div className="connect">
        <p>or connect using.</p>

      </div>
      <div className="links">
      <a href="http://www.twitter.com/ "><img src={ Logo_of_Twitter} height="30"></img></a>
      <a href="https://www.google.com/">  <img src={ google} height="30"></img></a>
      </div>
      
      <div className="account">
        <p>Don't have an account <a href="#">Sign Up</a></p>
      </div>
        </div>
        

{/* Signup */}
<form >
<div className="card">

<div>
<FontAwesomeIcon icon={faArrowLeft} />
</div>
        <div className="head2">
        <h1>Let's get started!</h1>
         <p>create a new account to login</p>
        </div>

        <div className="input-container">
      <div className="icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <input type="text" placeholder="Enter Username" className="input-with-icon" required />
    </div>

    <br/>
        
      <div className="input-container">
      <div className="icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <input type="email" placeholder="Enter Email Id" className="input-with-icon"  required />
  
       </div>

<br></br>

       <div className="input-container">
      <div className="icon">
        <FontAwesomeIcon icon={faMobile} />
      </div>
      <input type="number" placeholder="Enter Mobile Number" className="input-with-icon" maxLength='10' minLength='10' />
       </div>
       
<br></br>

       <div className="input-container">
      <div className="icon">
        <FontAwesomeIcon icon={faLock} />
      </div>
      <input type="password" placeholder="Enter Password"   value={password}
        onChange={handlePasswordChange}  className="input-with-icon" maxLength='8' minLength='8' required/>
       </div>

<br></br>

       <div className="input-container">
      <div className="icon">
        <FontAwesomeIcon icon={faLock} />
      </div>
      <input type="password" placeholder="Confirm Password"    value={confirmPassword}
        onChange={handleConfirmPasswordChange}  className="input-with-icon" maxLength='8' minLength='8' required />
            {!valid && confirmPassword.length > 0 && (
        <p>Passwords do not match</p>)}
       </div>
       
<br></br>
       <button className="btn1">Sign Up</button>

      <div className="account">
        <p>Already have account? <a href="#">Sign In</a></p>
      </div>
        </div>
</form>
</div>
 </>
    )
            
}



export default Loginsignup;