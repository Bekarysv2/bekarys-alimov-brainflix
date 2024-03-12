import './Nav-bar.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import mohanImg from '../../assets/images/Mohan-muruge.jpg';
import React, { useState } from 'react';

const NavigationBar = () => {

  return (
    <nav className="nav">
        <img src={logo} alt="BrainFlix Logo" className="nav__logo" />
      <div className="nav__container">
          <input
            type="search"
            placeholder="Search"
            className="nav__search"
            id="search-input"
          ></input>
        <button type="submit" className="nav__upload-button">
        UPLOAD
        </button>
        <div className="nav__container__profile">
          <img src={mohanImg} alt="Mohan-profile" className="nav__mohan"></img>
        </div>
      </div>
      <button type="submit" className="nav__upload-button-mobile">
        UPLOAD
      </button>
    </nav>
  );
}

export default NavigationBar;