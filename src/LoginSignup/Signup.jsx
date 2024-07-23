import React, { useState } from 'react';
import './Signup.css';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';
import personIcon from '../assets/person.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('Signup');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = action === 'Signup' ? 'http://localhost:3001/register' : 'http://localhost:3001/login';
    const data = { name, email, password };

    console.log('Sending data:', data);

    axios.post(url, data)
      .then(response => {
        console.log('Response:', response.data);
        navigate('./login');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <header>{action}</header>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <img src={personIcon} alt="Person icon" />
              <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
          )}
          <div className="input">
            <img src={emailIcon} alt="Email icon" />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="Password icon" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            {action==="Signup"?<div></div>:<div>
              Forgot password? <span>Click here</span>
            </div>}
            
          </div>
          <div className="submit-container">
            {action === "Signup" ? (
              <button type="submit" className="submit-button">Signup</button>
            ) : (
              <button type="submit" className="submit-button">Login</button>
            )}
            <div className="switch-action">
              {action === "Signup" ? (
                <div className="switch" onClick={() => setAction("Login")}>Switch to Login</div>
              ) : (
                <div className="switch" onClick={() => setAction("Signup")}>Switch to Signup</div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;