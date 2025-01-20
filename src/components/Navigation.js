import { fas } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../images/logo.jpg';

library.add(fas);
const Navigation = () => {
  const divStyle = {
    backgroundImage: `url(${logo})`,
    height: '100px',
    width: '100px'
  };

  useEffect(() => {
    console.log("Hello")
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function() {
      $('.js-fullheight').css('height', $(window).height());
    });
    return () => {
      $(window).off('resize');
    };
  }, []);

  return (
      <>
      <nav id="sidebar">
        <div className="p-4 pt-5">
          <a href="#" className="img logo rounded-circle mb-5" style={divStyle}></a>
          <ul className="list-unstyled components mb-5">
          <li>
              <Link to="">Home</Link>
            </li>
          <li>
              <Link to="onlinetest">Online Quize</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to ="portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to ="contact">Contact</Link>
            </li>
          </ul>
          <div className="footer">
            <p>
              All rights reserved | This template is made with <FontAwesomeIcon icon="home" aria-hidden="true" />by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
            </p>
          </div>
        </div>
      </nav>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-absolute">
          <div className="container-fluid mt-2 ml-2">
            <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={() => $('#sidebar').toggleClass('active')}>
              < FontAwesomeIcon icon = "fa-bars" />
              <span className="sr-only">Toggle Menu</span>
            </button>
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon ="fa-bars"/>
            </button>
          </div>
        </nav>
      </div>
      {/* <div id="content" className="p-4 p-md-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={() => $('#sidebar').toggleClass('active')}>
              < FontAwesomeIcon icon = "fa-bars" />
              <span className="sr-only">Toggle Menu</span>
            </button>
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon ="fa-bars"/>
            </button>
          </div>
        </nav>
        <h2 className="mb-4">Sidebar #01</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div> */}
      </>
  );
}

export default Navigation;