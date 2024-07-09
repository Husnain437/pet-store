import React,{useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import { registerSchema } from '../../Schema/Schema';
import '../../main.css'
import axios from 'axios';
import { useEffect } from 'react';


const Register = () => {
    const [formdata, setFormData] = useState(null);
    const [userData, setUserData] =useState(null)
    const [dataLoading,setDataLoading] = useState(true)


useEffect(()=>{
    fetchingUser();
})
        
    const fetchingUser =async()=>{

            try{
                const response = await axios.get('http://localhost:3001/users')
                setUserData(response.data)
            }
            catch (error) {
                console.error('Error fetching data:', error);
              } finally {
                setDataLoading(false);
              }
    }

    const postingUser =async(values)=>{

        try{
            const finding = await userData.find(user => user.email === values.email)
            if(finding){
                alert('User Already in system');
                window.location.reload()
            }
            else{
                axios.post('http://localhost:3001/users',{
                    "email": formdata.email,
                    "password": formdata.password,
                    "cpassword": formdata.cpassword,
                    "firstname":formdata.firstname,
                    "lastname": formdata.lastname
                    })
            } 
        }
        catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setDataLoading(false);
          }
         
    }
  

    const onSubmit=(values)=>{
       
        setFormData(values)
        console.log(formdata,'form data');
        postingUser(values)
    }
    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
          email: '',
          password: '',
          cpassword:'',
          firstname:'',
          lastname:'',
          
        },
        validationSchema: registerSchema,
        onSubmit,
      });
  return (
    <div className='form-main'>
        <div className='auth-heading'>
            <h1>Create Accounts</h1>
            
        </div>
            <div className='form-outer'>
                <form className='form-inner' onSubmit={((values)=>handleSubmit(values))}>
                <p className='inner-text'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

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


                        <label className='inp-label' htmlFor="firstname">First Name</label>
                        <input
                            className='form-field'
                            id="firstname"
                            name="firstname"
                            type="text"
                            onChange={handleChange}
                            value={values.firstname}
                            onBlur={handleBlur}
                        />
                        {errors.firstname ? <div className='error-style'>{errors.firstname}</div> : null}


                        <label className='inp-label' htmlFor="lastname">last Name</label>
                        <input
                            className='form-field'
                            id="lastname"
                            name="lastname"
                            type="text"
                            onChange={handleChange}
                            value={values.lastname}
                            onBlur={handleBlur}
                        />
                        {errors.lastname ? <div className='error-style'>{errors.lastname}</div> : null}

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

                        
                        <label className='inp-label' htmlFor="cpassword">Confrim Password</label>
                        <input
                            className='form-field'
                            id="cpassword"
                            name="cpassword"
                            type="password"
                            onChange={handleChange}
                            value={values.cpassword}
                            onBlur={handleBlur}
                        />
                        {errors.cpassword ? <div className='error-style'>{errors.cpassword}</div> : null}
                    
                        <button className='from-btn' type="submit">Submit</button>
                </form>
              
              
            </div>
    </div>
  )
}

export default Register