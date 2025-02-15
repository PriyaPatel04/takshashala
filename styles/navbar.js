import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
    <div className="container-fluid">
      <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link 
             className="nav-link active" 
             aria-current="page"
              to="/">HOME</Link>

          </li>
          <li className="nav-item">
            <Link 
            className="nav-link"
            to="/explorebihar">EXPLOREBIHAR</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/destinations">DESTINATIONS</Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link" to="/artsandcultures">ARTS&CULTURES</Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">ABOUTUS</Link>
          </li> 
      
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar