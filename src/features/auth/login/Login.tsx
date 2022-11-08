import { useState,useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link,useLocation } from 'react-router-dom'
import {userActions } from '../../../_actions'
import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../css/bet.css'

const Login = () => {
    const [inputs,setInputs] = useState({
        email:'',
        password:''
    })
    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    useEffect(() => {
        localStorage.removeItem('user')
    },[]);

 
    const handleSubmit = (e: any) => {

        setSubmitted(true)
        if(e.email && e.password){
            
            const {from } = location.state || {from: {pathname: "/"}}
            //dispatch(userActions.login(e, from))
        }
    }

  return (
    <div className="container register-container">
        <div className="wrapper">
            <h1 className="title">SIGN IN</h1>
            
            <Formik initialValues={inputs} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({errors, touched, isSubmitting}) =>(
                      <Form className="form-input">
                          <Field name="email" type="text" placeholder="Email" className={'form-text form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                          <ErrorMessage name="email" component="div" className="invalid-feedback red" />
                          <Field name="password" placeholder="Password" type="password" className={'form-text form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                          <button type="submit" disabled={isSubmitting} className="form-button">
                              {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                              LOGIN
                          </button>
                          <Link className="link btn btn-link" to="../register">REGISTER</Link>
                      </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default Login
