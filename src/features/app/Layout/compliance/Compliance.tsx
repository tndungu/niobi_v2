import React, { useEffect, useState } from 'react'
import styles from '../styles.module.scss';
import {useDispatch, useSelector } from 'react-redux'
import {Link } from 'react-router-dom'
import {userActions } from '../../../../_actions'
import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../../../auth/Auth.css';
import showPwdImg from '../ShowPassword/show-password.svg';
import hidePwdImg from '../ShowPassword/hide-password.svg';
import { LoginHeader } from '../../../auth/LoginHeader'


interface ComplianceRequest{
  business_reg_document: File | null;
  cr_12:File | null;
  pin_number: string;
  pin_certificate:File | null;
}

export const Compliance = () => {
  const [user,setUser] = useState<ComplianceRequest>({
    business_reg_document: null,
    cr_12: null,
    pin_number: '',
  pin_certificate:null
})

useEffect(() => {
},[])

const [submitted, setSubmitted] = useState(false)
const [isRevealPwd, setIsRevealPwd] = useState(false);
//const registering = useSelector(state => state.registration.registering)
const dispatch = useDispatch()

const validationSchema = Yup.object().shape({
  business_name: Yup.string()
        .required('Business Name is required'),
        business_type: Yup.string()
        .required('Business Type is required')
})

const handleSubmit = (e:any) => {
    console.log("event: ",e);
    setSubmitted(true);
    if(e.business_name && e.business_type){
        dispatch(userActions.register({e}) as any)
    }
}

  return (
    <div className={styles.bodyWrapper}>
    <div className="formBx">
    <div className='register-business'>
                <span><h2>Upload Required Documents</h2></span>
               </div>
    <Formik initialValues={user} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({errors, touched, isSubmitting, handleChange, values,setFieldValue}) =>(
                        <Form className='form-input'>
                            <div className='inputBx'>
                                <span>Business Registration document</span>
                                <input id="business_reg_document" name="business_reg_document" type="file" 
                                className={'form-text form-control' + (errors.pin_number && touched.pin_number ? ' is-invalid' : '')}
                                onChange={(event:any) => {setFieldValue("business_reg_document", event.currentTarget.files[0]);}}
                                />
                                <ErrorMessage name="business_reg_document" component="div" className="invalid-feedback red" />
                            </div>
                            <div className='inputBx'>
                                <span>CR-12</span>
                                <input id="cr_12" name="cr_12" type="file" 
                                className={'form-text form-control' + (errors.pin_number && touched.pin_number ? ' is-invalid' : '')}
                                onChange={(event:any) => {setFieldValue("cr_12", event.currentTarget.files[0]);}}
                                />
                                <ErrorMessage name="business_reg_document" component="div" className="invalid-feedback red" />
                            </div>
                            <div className='inputBx'>
                                <span>Business KRA Pin Number</span>
                                <Field  name="pin_number" type="text" placeholder="Pin Number" className={'form-text form-control' + (errors.pin_number && touched.pin_number ? ' is-invalid' : '')} />
                                <ErrorMessage name="pin_number" component="div" className="invalid-feedback red" />
                            </div>
                            <div className='inputBx'>
                                <span>Business KRA PIN Certificate</span>
                                <input id="business_reg_document" name="business_reg_document" type="file" 
                                className={'form-text form-control' + (errors.pin_number && touched.pin_number ? ' is-invalid' : '')}
                                onChange={(event:any) => {setFieldValue("business_reg_document", event.currentTarget.files[0]);}}
                                />
                                <ErrorMessage name="business_reg_document" component="div" className="invalid-feedback red" />
                            </div>
                            
                          
                            <div className='inputBx'>
                                <button type="submit" disabled={isSubmitting} className="form-button">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    <span>Submit</span>
                                </button>
                            </div>
                          
                        </Form>
                    )}
                </Formik>
    </div>
  </div>
  )
}
