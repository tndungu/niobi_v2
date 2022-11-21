import React from 'react'
import { Link } from 'react-router-dom'

export const VerifyEmail = ({email}:any) => {
  return (
    <>
      <div className="formBx">
          <div className='register-business'>
              <span><h2>Check your email</h2></span>
          </div>
          <div className='verify-text'>
              <span><p>We sent you a message with password reset link to {email}. Please check it and don't forget to view the spam folder as well.</p></span>
          </div>
          <div className='inputBx'>
              <div className='verification-button'>
                  <input type='button' value='Resend in 30 Sec' />
                
              </div>

          </div>
          <div className="inputBx">
                <p>Something wrong? <Link to="../contact-us">Contact us</Link></p>
            </div>
      </div>
      
      </>
  )
}
