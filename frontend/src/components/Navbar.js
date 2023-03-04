import React from 'react'
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.css'
import {Link, NavLink} from"react-router-dom"
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand logo" >LOGO</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <NavLink className="nav-link active navbarBtn" aria-current="page" to={"/"}>
                Home
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink className="nav-link active navbarBtn" aria-current="page" to={"/signUp"}>
                Sign-Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active navbarBtn" aria-current="page" to={"/proposal"}>
                Page-14
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active navbarBtn" aria-current="page" to={"/vendordetail"}>
                Page-15
              </NavLink>
            </li>
           
          </ul>
        
  </div>
</nav>
    </>
  )
}

export default Navbar
