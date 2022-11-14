import {useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Link } from 'react-router-dom'
import {userActions } from '../../../_actions'
import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../Auth.css'
import { UserRequest } from '../../../interfaces/interfaces';
import showPwdImg from '../ShowPassword/show-password.svg';
import hidePwdImg from '../ShowPassword/hide-password.svg';

export const Register = () => {
    //const alert = useSelector(state => state.alert)

    const [user,setUser] = useState<UserRequest>({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        confirm_password:'',
        country_code:'+254',
        mobile:''
    })

    useEffect(() => {
    },[])

    const [submitted, setSubmitted] = useState(false)
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    //const registering = useSelector(state => state.registration.registering)
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6,'Password must be atleast 6 characters')
            .required('Password is required'),
            
        confirm_password: Yup.string()
        .oneOf([Yup.ref('password'),null], 'Passwords must match')
    })

    const handleSubmit = (e:any) => {
        console.log("event: ",e);
        setSubmitted(true)
        if(e.email && e.password){
            dispatch(userActions.register(e) as any)
        }
    }

  return (
    <div className="container register-container">
            <div className="formBx">
               <div className='login'>
                <span>Create Account</span>
               </div>
                <Formik initialValues={user} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({errors, touched, isSubmitting, handleChange, values}) =>(
                        <Form className='form-input'>
                            <div className='inputBx'>
                                <span>First Name</span>
                                <Field  name="first_name" type="text" placeholder="First Name" className={'form-text form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                                <ErrorMessage name="first_name" component="div" className="invalid-feedback red" />
                            </div>
                            <div className='inputBx'>
                                <span>Last Name</span>
                                <Field  name="last_name" type="text" placeholder="Last Name" className={'form-text form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '')} />
                                <ErrorMessage name="last_name" component="div" className="invalid-feedback red" />
                            </div>
                            <div className='inputBx'>
                                <span>Email</span>
                                <Field  name="email" type="text" placeholder="Email" className={'form-text form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback red" />
                            </div>
                          <div className='inputBx'>
                              <div className='mobile-no-input'>
                                  <div className='inputBx-mobile-prefix'>
                                      <span>Mobile</span>
                                      <Field name="country_code" as="select" className={'form-text form-control select-box' + (errors.country_code && touched.country_code ? ' is-invalid' : '')} >
                                        <option value="+254">+254</option>
                                        <option value="+255">+255</option>
                                        <option value="+256">+256</option>
                                        </Field>
                                      {/* <Field name="mobile" type="text" placeholder="Mobile" className={'form-text form-control' + (errors.mobile && touched.mobile ? ' is-invalid' : '')} /> */}
                                      <ErrorMessage name="country_code" component="div" className="invalid-feedback red" />
                                  </div>
                                  <div className='inputBx-mobile'>
                                      <span></span>
                                      <Field name="mobile" type="text" placeholder="" className={'form-text form-control' + (errors.mobile && touched.mobile ? ' is-invalid' : '')} />
                                      <ErrorMessage name="mobile" component="div" className="invalid-feedback red" />
                                  </div>
                              </div>
                          </div>
                            <div className='inputBx'>
                                <span>Password</span>
                                <div className='pwd-container'>
                                    <Field name="password" placeholder="Password" type={isRevealPwd ? "text" : "password"} 
                                    className={'form-text form-control' + (errors.password && touched.password ? ' is-invalid' : '')} 
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    />
                                    <img title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd(prevState => !prevState)} />
                                </div>
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className='inputBx'>
                                <span>Confirm Password</span>
                                <div className='pwd-container'>
                                    <Field name="confirm_password" placeholder="Confirm Password" type={isRevealPwd ? "text" : "password"} 
                                    className={'form-text form-control' + (errors.confirm_password && touched.confirm_password ? ' is-invalid' : '')} 
                                    value={values.confirm_password}
                                    onChange={handleChange("confirm_password")}
                                    />
                                    <img title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd(prevState => !prevState)} />
                                </div>
                                <ErrorMessage name="confirm_password" component="div" className="invalid-feedback" />
                            </div>
                            {/* <div className='invalid-Login'>
                                <span>The email or password is incorrect. Please retry</span>
                            </div> */}
                        
                            <div className='inputBx'>
                                <button type="submit" disabled={isSubmitting} className="form-button">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    <span>Sign In</span>
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
