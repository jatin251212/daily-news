import React, { useState } from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navbar=(props)=>{
  //   static propTypes = {

  //   }
  const [v,setV]=useState();
  const handleChange=(e)=>{
    const name=e.target.value;
    setV(name);
    
  }
  const sendData=(data)=>{
    props.recieveData(data);

  }

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsDaily
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/link">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/entertainnment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/general">
                      General
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sport">
                      Sport
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {/* <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                </ul>
              </li>
              <li className="nav-item">
                <a  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true">
                  Country
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={sendData('in')} >
                      India
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={sendData('us')} >
                      USA
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={sendData('sa')} >
                      South Africa
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={sendData('nz')}>
                      New Zealand
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={sendData('ph')} >
                      Philippines
                    </button>
                  </li>
                </ul>
                
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
              onChange={handleChange}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
             <Link className="dropdown-item" to={`/${v}`} >
                      <button style={{padding:'10px'}}>Enter</button>
            </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  
}

export default Navbar;
