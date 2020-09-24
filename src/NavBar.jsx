import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import './App.css';
const active_class={
color:'red',
border_botton: '1px solid red'
}



const Navbar = () =>{
  return (
      <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">

         
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand navbar_brand" to="/">A1plus</NavLink>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="menu_active" to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="menu_active" to="/Services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="menu_active" to="/Contact">ContactUs</NavLink>
              </li>
          </ul>
        </div>
     </div>
    </nav>
  </div>
</div>
      </div>
      </>
  )
}
export default Navbar;