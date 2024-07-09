import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import { loginSchema } from '../../Schema/Schema';
import '../../main.css'
import axios from 'axios';
import {useState,useEffect} from 'react';

const SignIn = () => {

    const [userData, setUserData] =useState(null)
    const [userFind, setUserFound] = useState(false)

    useEffect(() => {

        const all =async()=>{
            try{
                const response = await axios.get('http://localhost:3001/users')
                setUserData(response.data)
            }
            catch(error){
                console.log(error);
            }
            finally{
                
            }
           
        }
        all();
        
    }, []);
    const fetching =async()=>{
        const foundUser = await userData.find(user => user.email === values.email && user.password === values.password);
        if (foundUser) {
            alert('Logged In');
        } else {
            alert('Invalid credentials');
            window.location.reload();
        }
    }

    const onSubmit=(values)=>{
        console.log('Submitted');
        fetching(values);
       
        
       
    }
    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
          email: '',
          password: '',
          
        },
        validationSchema: loginSchema,
        onSubmit,
        
       
      });
      console.log(errors);
      
  return (
        <div className='form-main'>
            <div className='auth-heading'>
                <h1>Welcome Back</h1>
                <p>Please sign in to access your full account</p>
            </div>
                <div className='form-outer'>
                <form className='form-inner' onSubmit={((values)=>handleSubmit(values))}>
                        
                        <label className='inp-label' htmlFor="email">Email Address</label>
                        <input
                            className='form-field'
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                           
                        />
                        {errors.email ? <div className='error-style'>{errors.email}</div> : null}

                        <label className='inp-label' htmlFor="password">Password</label>
                        <input
                            className='form-field'
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                        />
                        {errors.password ? <div className='error-style'>{errors.password}</div> : null}
                    
                        <button className='from-btn' type="submit">Submit</button>

                        <p className='forget'>Forget Password?</p>
                </form>
              
            </div>
    </div>
  )
}

export default SignIn