import React from 'react'
import Add from "../img/addAvatar.png"

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login;
