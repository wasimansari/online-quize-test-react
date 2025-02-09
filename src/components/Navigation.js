import { fas } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

library.add(fas);
const Navigation = () => {
  const divStyle = {
    backgroundImage: `url(${logo})`,
    height: '100px',
    width: '100px'
  };

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const toggleAdminMenu = (e) => {
    e.preventDefault();
    setIsAdminOpen(!isAdminOpen);
  };

  useEffect(() => {
    console.log("Hello")
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
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
          <a
            href="#"
            className="img logo rounded-circle mb-5"
            style={divStyle}
          ></a>
          <ul className="list-unstyled components mb-5">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
            <a
              href="#adminSubmenu"
              aria-expanded={isAdminOpen ? "true" : "false"}
              className=""
              onClick={toggleAdminMenu}
            >
              Admin{" "}
              <FontAwesomeIcon
                icon={isAdminOpen ? "chevron-up" : "chevron-down"} // Change icon dynamically
                className="ml-5"
              />
            </a>
            <ul className={`collapse list-unstyled ${isAdminOpen ? "show" : "collapse"}`} id="adminSubmenu">
              <li>
                <Link to="admin/users">Manage Users</Link>
              </li>
              <li>
                <Link to="admin/reports">Reports</Link>
              </li>
              <li>
                <Link to="admin/settings">Settings</Link>
              </li>
            </ul>
            </li>
            <li>
              <Link to="onlinetest">Online Quize</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <div className="footer">
            <p>
              All rights reserved | This template is made with{" "}
              <FontAwesomeIcon icon="home" aria-hidden="true" />
              by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib.com
              </a>
            </p>
          </div>
        </div>
      </nav>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-absolute">
          <div className="container-fluid mt-2 ml-2">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-primary"
              onClick={() => $("#sidebar").toggleClass("active")}
            >
              <FontAwesomeIcon icon="fa-bars" />
              <span className="sr-only">Toggle Menu</span>
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon="fa-bars" />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;