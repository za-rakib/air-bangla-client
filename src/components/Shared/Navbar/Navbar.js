import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <a className="navbar-brand logo" href="/home">AIR BANGLA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse d-flex justify-content-end" >
        <ul className="navbar-nav nav">
           <li className="nav-item active">
           <Link className="nav-link" to="/home">HOME</Link>
            </li>
            <li className="nav-item">
           
            <a className="nav-link" href="#services">SERVICES</a>
            </li>
            <li className="nav-item dropdown">
          <Link className="nav-link" to="/about">ABOUT</Link>           
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/news">NEWS</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/addDestination">Add Destination</Link>
            </li>
        </ul>
        </div>
      </nav>
    );
};

export default Navbar;