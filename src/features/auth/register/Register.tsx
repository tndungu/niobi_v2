import {useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Link } from 'react-router-dom'
import {userActions } from '../../../_actions'
import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../css/bet.css'
import { UserRequest } from '../../../interfaces/interfaces'

export const Register = () => {
    //const alert = useSelector(state => state.alert)

    const [user,setUser] = useState<UserRequest>({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    useEffect(() => {
    },[])

    const [submitted, setSubmitted] = useState(false)
    //const registering = useSelector(state => state.registration.registering)
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6,'Password must be atleast 6 characters')
            .required('Password is required'),
            
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'),null], 'Passwords must match')
    })

    const handleSubmit = (e:any) => {
        
        setSubmitted(true)
        if(e.email && e.password){
            //dispatch(userActions.register(e))
        }
    }

  return (
    <div className="container register-container">
        <div className="wrapper">
            <div className="title">CREATE AN ACCOUNT</div>
            <Formik initialValues={user} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({errors, touched, isSubmitting}) =>(
                      <Form className="form-input">
                          <Field name="email" type="text" placeholder="Email" className={'form-text form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                          <ErrorMessage name="email" component="div" className="invalid-feedback red" />
                          <Field name="password" placeholder="Password" type="password" className={'form-text form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                          <Field name="confirmPassword" placeholder="Confirm Password" type="password" className={'form-text form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                          <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                          <button type="submit" disabled={isSubmitting} className="form-button">
                              {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                              CREATE
                          </button>
                          <Link className="link btn btn-link" to="../login">LOGIN</Link>
                      </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}
