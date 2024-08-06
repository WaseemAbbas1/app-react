import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
   
    <>
    <nav className="navbar navbar-expand-lg ">
    <div className="container">
      <Link to ="/" className="navbar-brand bg-transparent border-0" >Logo</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link  bg-transparent border-0" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link bg-transparent border-0" >About</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link bg-transparent border-0" >Contact</Link>
          </li>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle bg-transparent border-0"  data-bs-toggle="dropdown" aria-expanded="false">
              Auth
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/auth/user" className="dropdown-item bg-transparent border-0">Login</Link></li>
              <li><button className="dropdown-item bg-transparent border-0" >Register</button></li>
              <li><hr className="dropdown-divider"/></li>
              <li><button className="dropdown-item bg-transparent border-0" >Forget password</button></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle bg-transparent border-0"  data-bs-toggle="dropdown" aria-expanded="false">
              Hooks
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/hook/usestate" className="dropdown-item bg-transparent border-0">UseState</Link></li>
              <li><Link to="/hook/useeffect" className="dropdown-item bg-transparent border-0" >UseEffect</Link></li>
              <li><Link to="/hook/useref" className="dropdown-item bg-transparent border-0" >UseRef</Link></li>
              <li><Link to="/hook/usememo" className="dropdown-item bg-transparent border-0" >UseMemo</Link></li>
              <li><Link to="/hook/usecontext" className="dropdown-item bg-transparent border-0" >UseContext</Link></li>
             
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </>
  )
}
