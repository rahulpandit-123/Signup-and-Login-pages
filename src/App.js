import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginSignup from './LoginSignup/Signup';
import Login from './Login/Login'
import Home from '../src/Home/Home'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginSignup />} />
     <Route path='/login' element={<Login/>}/>
     <Route path='/Home' element={<Home/>}/>
    </Routes>
  );
};

export default App;
