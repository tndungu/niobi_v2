import React from 'react'
import './loginheader.css'

export interface LoginHeaderProps {
  component: string
}

export const LoginHeader = ({component}: LoginHeaderProps) => {
    const welcome = component == 'login' ? "Welcome Back !" : "Get Started with Niobi";
    const msg = component == 'login' ? "Please enter your details" : "We would love ot learn more about your business.";
  return (
    <div className='social-box'>
      <div className="separator">Or</div>
      {/* <div className="inputBx centerText">
        <p> Sign in With....</p>
      </div> */}
      <div className="social-login">
          <img src="/assets/google.png" width="20px" />
          <a href="#" type="button">
            Login with Google
          </a>
        </div>
    </div>
  );
}
