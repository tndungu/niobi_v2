import React from 'react'
import { Link } from 'react-router-dom'

export const VerifyEmail = () => {
  return (
      <div className="formBx">
          <div className='register-business'>
              <span><h2>Verify Email</h2></span>
          </div>
          <div className='verify-text'>
              <span><p>Thank you for signing up. A Verification email has been sent to your email.</p></span>
          </div>
          <div className='inputBx'>
              <div className='verification-button'>
                  <input type='button' value='RESEND VERIFICATION EMAIL' />
                  <div>
                      <p><Link to="../login">Sign in</Link></p>
                  </div>
              </div>

          </div>
      </div>
  )
}
