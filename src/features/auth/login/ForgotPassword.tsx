import React from 'react'
import { useState,useEffect } from 'react'
import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux'
import {Link,useLocation } from 'react-router-dom'
import {userActions } from '../../../_actions'
import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import '../../auth/Auth.css';
import showPwdImg from '../ShowPassword/show-password.svg';
import hidePwdImg from '../ShowPassword/hide-password.svg';
import { LoginHeader } from '../LoginHeader'
import {  dispatchStore } from '../../../Store/store';
import { Button, FormField, } from '@team-monite/ui-kit-react'

export interface ILogin {};

interface ForgotPasswordValues {
    email: string
}


export const ForgotPassword = () => {

    const [inputs,setInputs] = useState<ForgotPasswordValues>({
        email:''
    })

    const [submitted, setSubmitted] = useState(false)

    const dispatch = useDispatch()
    const location = useLocation()

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required')
    })

    useEffect(() => {
        localStorage.removeItem('user')
    },[]);

 
    const handleSubmit = (e: any) => {

        console.log(e);
        setSubmitted(true)
        if(e.email){
            
            const {from } = location.state || {from: {pathname: "/"}}
            dispatchStore(userActions.login({email:e.email}, from) as any);
        }
    }

  return (
    <div className="container register-container">
    <div className="formBx">
       <div className='login'>
        <span>Forgot Password</span>
       </div>
        <Formik initialValues={inputs} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({errors, touched, isSubmitting, handleChange, values}) =>(
                <Form className='form-input'>
                    <div className='inputBx'>
                        <span>Email</span>
                        <Field  name="email" type="text" placeholder="Email" className={'form-text form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback red" />
                    </div>
              
                    {/* <div className='invalid-Login'>
                        <span>The email or password is incorrect. Please retry</span>
                    </div> */}
                  
                    <div className='inputBx'>
                        <button type="submit" disabled={isSubmitting} className="form-button">
                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            <span>Reset Password</span>
                        </button>
                    </div>
                    <div className="inputBx">
                    <p>Already have an account? <Link to="../login">Sign in now</Link></p>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
</div>
  )
}
