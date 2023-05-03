import React, { useEffect, useState } from 'react';
import LoginForm from './Component/LoginForm';

import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';

import './App.css'


function App() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    
    const user = localStorage.getItem('user');

    if(user){
      navigate('/home');
    }
    else{
      navigate('/')
    }
  },[])

  return (
    <div className="App">
       <div className='container'>
          <Routes >
            <Route path='/' element={<LoginForm setLogin={setLogin} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>   
      
    </div>
  );
}

export default App;
