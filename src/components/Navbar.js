import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='white'?'light':'dark'} bg-${props.mode==='white'?'light':props.mode} border-bottom border-bottom-${props.mode==='white'?'light':'dark'}`} style={{color:props.mode==='white'?'black':'white'}}>
        <div className={`container-fluid`} style={{color:props.mode==='white'?'black':'white'}}>
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">{props.aboutText}</a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode === 'white'?'black':'white'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault1" onClick={props.redMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Enable Red Mode</label>
            </div>
            <div className={`form-check mx-3 form-switch text-${props.mode === 'white'?'black':'white'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2" onClick={props.greenMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Enable Green Mode</label>
            </div>
            <div className={`form-check mx-2 form-switch text-${props.mode === 'white'?'black':'white'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault3" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault3">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "TextUtils Now",
    aboutText: "About Us"
}