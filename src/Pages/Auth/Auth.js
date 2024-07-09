import React,{useState} from 'react'
import Register from '../../Components/Register/Register'
import SignIn from '../../Components/SignIn/SignIn'

const Auth = () => {
    const [view, setView] = useState("login")
  return (
    <div className='Auth'> 
    <div className='up-div'>
        <div className='Auth-heading'>
            <h1>My Account</h1>
        </div>
        <div className='switch'>
           
                <button className={view === 'login' ? 'active': 'inactive'} onClick={()=>{setView('login')}}>Sign In</button>
            
                <button className={view === 'register' ? 'active': 'inactive'} onClick={()=>{setView('register')}}>Register</button>
           
        </div>

        </div>
        <div className='from-view'>
            {view === 'login' ? <SignIn/> : <Register/>}
        </div>
    </div>
  )
}

export default Auth