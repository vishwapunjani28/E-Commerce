import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name'/>
          <input type="Email" placeholder='Enter Your Email Address'/>
          <input type="password" placeholder='Enter Your Password' />
          <button>Continue</button>
        <p className='loginsignup-login'>
          Alreay Have an Account? <span>Login Here</span>
        </p>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div> 
    </div>
  )
}

export default LoginSignup
