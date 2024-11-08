
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RegisterProcess } from '../../reducers/auth.actions'
import { useNavigate } from 'react-router-dom'


const initialValues={firstName:"",lastName:"",email:"",password:"",gender:''}
const Registration = () => {
    const [gender,setGender]=useState(null)
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (values) => {
        values.gender=gender
        console.log("data", values);
        dispatch(RegisterProcess({data:values}))
    }
    const handleGender = (event) => {
        const changedGender = event.target.value;
        setGender(changedGender);
    }
  return (
    <div className='py-5'>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} >
        <Form>
        <div className='py-2'>
        <Field 
        as={TextField}
        name="firstName"
        type="firstName"
        placeholder="First Name"
        variant="outlined"
        fullWidth />
         <ErrorMessage component="div" name="firstName" />
        </div>
        <div className='py-2'>
        <Field 
        as={TextField}
        name="lastName"
        type="lastName"
        placeholder="Last Name"
        variant="outlined"
        fullWidth />
         <ErrorMessage component="div" name="lastName" />
        </div>
        <div className='py-2'>
        <Field 
        as={TextField}
        name="email"
        type="email"
        placeholder="Email"
        variant="outlined"
        fullWidth />
         <ErrorMessage component="div" name="email" />
        </div>
       <div className='py-2'>
       <Field 
       as={TextField}
        name="password"
        type="password"
        placeholder="Password"
        variant="outlined"
        fullWidth/>
         <ErrorMessage component="div" name="password" />
       </div>
       <div>
       <RadioGroup onChange={handleGender}
        row
        aria-labelledby="gender"
        name="gender"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        
      </RadioGroup>
       </div>
       <div className='py-2'>
        <Button type='submit' variant='contained' fullWidth>
            Submit
        </Button>
       </div>
        </Form>
       
       
    
      </Formik>
      <div className='flex gap-2 justify-center items-center'>
        <p className='text-sm'>If you don't have an account?</p>
        <Button onClick={()=>navigate("/login")}>Login</Button>
      </div>
    </div>
  )
}

export default Registration
