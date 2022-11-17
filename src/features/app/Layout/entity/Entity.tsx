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

interface EntityRequest{
  business_name: string;
  company_type:string;
  business_activity: string;
  other:string;
}

export const Entity = () => {
  const [entity,setEntity] = useState<EntityRequest>({
    business_name: '',
    company_type:'',
    business_activity: '',
    other:''
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
        company_type: Yup.string()
        .required('Company Type is required'),
        business_activity: Yup.string()
        .required('Company Type is required')
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
                <span><h2>Register your business</h2></span>
               </div>
    <Formik initialValues={entity} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({errors, touched, isSubmitting, handleChange, values}) =>(
                        <Form className='form-input'>
                            <div className='inputBx'>
                                <span>Business Name</span>
                                <Field  name="business_name" type="text" placeholder="Business Name" className={'form-text form-control' + (errors.business_name && touched.business_name ? ' is-invalid' : '')} />
                                <ErrorMessage name="business_name" component="div" className="invalid-feedback red" />
                            </div>
                            
                          <div className='inputBx'>
                            <span>Company Type</span>
                            <Field name="company_type" as="select" className={'form-text form-control select-box' + (errors.company_type && touched.company_type ? ' is-invalid' : '')} >
                              <option value="--Select--">--Select--</option>
                              <option value="SoleProprietor">Sole Proprietor</option>
                              <option value="PVT">PVT</option>
                              <option value="Partnership">Partnership</option>
                            </Field>
                            <ErrorMessage name="company_type" component="div" className="invalid-feedback red" />
                          </div>
                          <div className='inputBx'>
                            <span>Business Activity</span>
                            <Field name="business_activity" as="select" className={'form-text form-control select-box' + (errors.business_activity && touched.business_activity ? ' is-invalid' : '')} >
                              <option value="--Select--">--Select--</option>
                              <option value="Technology">Technology</option>
                              <option value="Financial Services">Financial Services</option>
                              <option value="Energy">Energy</option>
                              <option value="Agriculture">Agriculture</option>
                              <option value="RealEstate">Real Estate</option>
                              <option value="TransportandLogistics">Transport and Logistics</option>
                              <option value="Manufacturing">Manufacturing</option>
                              <option value="Tourism">Tourism</option>
                              <option value="Professional_Services">Professional Services</option>
                              <option value="Other">Other (Please specify)</option>
                            </Field>
                            <ErrorMessage name="business_activity" component="div" className="invalid-feedback red" />
                          </div>
                          
                            <div className='inputBx'>
                                <button type="submit" disabled={isSubmitting} className="form-button">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    <span>Save Business Details</span>
                                </button>
                            </div>
                           
                        </Form>
                    )}
                </Formik>
                </div>
  </div>
  )
}
