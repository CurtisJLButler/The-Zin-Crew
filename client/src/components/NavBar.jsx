import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/#" className="navbar-brand d-flex align-items-center">
          <strong>Cars</strong>
        </a>
       

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Inventory">Inventory</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/AboutUs">About us</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}
 
export default NavBar;