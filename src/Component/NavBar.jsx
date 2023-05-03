import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate();

    const logOut = () =>{
        console.log('hello')
        localStorage.removeItem('user');
        navigate('/');
    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to={'/home'}>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
        </Link>
        <Link to={'/about'}>
            <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            </li>
        </Link>
      </ul>
     
        <button onClick={logOut} className="btn btn-outline-success" type="submit">Logout</button>
    </div>
  </div>
</nav>
  )
}

export default NavBar