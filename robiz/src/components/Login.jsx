import React from 'react'
import '../styles/login.css'
const Login = () => {
  return (
    <div>
        <div className='login'>
            <img src="/logo2.png" alt="Company Logo" />
            <h2 className='login-h'>Log In</h2>
            <h4>Mobile Number</h4>
            <input type="text"/>
            <h4>Password</h4>
            <input type="password"/>
            <p>Forgot Password?</p>
            <button>LOG IN</button>
        </div>
    </div>
  )
}

export default Login