
import { Button, TextField } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProfileProcess, LoginProcess } from '../../reducers/auth.actions'
import { useNavigate } from 'react-router-dom'


const initialValues={email:"",password:""}

const Login = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  
    const handleSubmit = (values) => {
        dispatch(LoginProcess({data:values}))
       
    }
   
   
  return (
    <div className='py-5'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
        <div className='py-3'>
        <Field 
        as={TextField}
        name="email"
        type="email"
        placeholder="Email"
        variant="outlined"
        fullWidth />
         <ErrorMessage component="div" name="email" />
        </div>
       <div className='py-3'>
       <Field 
       as={TextField}
        name="password"
        type="password"
        placeholder="Password"
        variant="outlined"
        fullWidth/>
         <ErrorMessage component="div" name="password" />
       </div>
       
       <div className='py-3'>
        <Button type='submit' variant='contained' fullWidth>
            Submit
        </Button>
        
       </div>

        </Form>
      </Formik>
      <div className='flex gap-2 justify-center items-center'>
        <p className='text-sm'>If you don't have an account?</p>
        <Button onClick={()=>navigate("/register")}>Register</Button>
      </div>
    </div>
   
  )
}

export default Login
