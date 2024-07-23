import React, { useState } from 'react';
import mail_icon from '../assets/email.png';
import pass_icon from '../assets/password.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', { email, password });
      console.log(response);
      if(response.data==="success"){
        navigate('/Home');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <header>Login</header>
          <div className='inputs'>
            <div className='input'>
              <img src={mail_icon} alt='Email icon' />
              <input
                type='text'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src={pass_icon} alt='Password icon' />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type='submit' className='submit-button'>Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
