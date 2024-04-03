import './Nav-bar.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import mohanImg from '../../assets/images/Mohan-muruge.jpg';
import upload from '../../assets/icons/upload.svg'
import React from 'react';
import { Link } from 'react-router-dom'; 

const NavigationBar = () => {
  return (
    <nav className="nav">
        <Link to="/">
            <img src={logo} alt="BrainFlix Logo" className="nav__logo" />
        </Link>
      <div className="nav__container">
        <div className="nav__container__searchBar">
          <input
            type="search"
            placeholder="Search"
            className="nav__search"
            id="search-input"
          ></input>
        </div>
        <Link to="/upload" className="nav__upload-button">UPLOAD</Link> 
        <div className="nav__container__profile">
          <img src={mohanImg} alt="Mohan profile" className="nav__mohan"></img>
        </div>
      </div>
        <Link to="/upload" className="nav__upload-button-mobile">UPLOAD</Link>
        
    </nav>
  );
}

export default NavigationBar;
