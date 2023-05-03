import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

  function LoginForm({ setLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic

    localStorage.setItem('user', JSON.stringify({email, password}))

    setLogin(true);
    navigate('/home');
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className='mt-5 ' style={{ width: '38%' }}>
      <div className="row mb-3 ">
        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email"
            className="form-control"
            id="inputEmail3"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
        </div>
      </div>
      <div className="row mb-3">
        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input 
            type="password"
            className="form-control" 
            id="inputPassword3"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
  </form>

   
  );
}

export default LoginForm;
