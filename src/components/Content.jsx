import React, { useState } from "react";

import "./Content.css"
import { toast, ToastContainer } from "react-toastify";
const Content = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const handleRegisterClick = () => {
    setIsRegisterActive(true); // Show register form
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false); // Show login form
  };

const [username,setUsername] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [error ,setError] =useState('');
const [users,setUsers ]= useState('');
  const submitHandler = (e) =>{
     e.preventDefault();
     if(password.lenght<8){
      setError("password must be of 8 character")
      return;
     }
     if(!/[!@#$%^&*()~`,'<>/]/.test(password)){
      setError("password must be contain any special character")
      return;
     }
     if(!/[A-Z]/.test(password)){
      setError("password must be contain any capital letter character")
      return;
     }
     setUsername([...users],{username,email,password})
     setError('');
    //  alert("form submitted");
     setEmail("");
     setPassword('');
     setUsername('');
     
     toast.success('🦄 login successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
      });
  }

    return (
      <div className="content">
        <div className={`container ${isRegisterActive ? 'active' : ''}`}>
          {/* Login Form */}
          <div className="form-box login">
            <form action="#" method="POST">
              <h1>Login</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" required name="username" />
                <i className="ri-user-3-line"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" required name="password" />
                <i className="ri-lock-password-fill"></i>
              </div>
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>
              <button className="btn" type="submit">Login</button>
            </form>
          </div>
  
          {/* Register Form */}
          <div className="form-box register">
            <form onSubmit={(e) => {submitHandler(e)}} >
              <h1>Register</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" required name="username"
                value={username} 
                onChange={(e)=>{
                  setUsername(e.target.value)
                }}
                />
                <i className="ri-user-3-line"></i>
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" required name="email" value={email} 
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}/>
                <i className="ri-user-3-line"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" required name="password" value={password} 
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}/>
                <i className="ri-lock-password-fill"></i>
              </div>
              {error && (
                <p className="error">{error}</p>
              )}
              <button className="btn" type="submit">Register</button>
            </form>
          </div>
             <ToastContainer></ToastContainer>
          {/* Toggle Panels */}
          <div className="toggle-box">
            <div className="toggle-panel toggle-left">
              <h1>Hello, Welcome</h1>
              <p>Don't have an account?</p>
              <button className="btn register-btn" onClick={handleRegisterClick}>
                Register
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome Back</h1>
              <p>Already have an account?</p>
              <button className="btn login-btn" onClick={handleLoginClick}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Content;
    