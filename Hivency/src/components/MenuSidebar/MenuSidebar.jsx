import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function MenuSidebar() {
  const menuRef = useRef(null);
  

  useEffect(() => {
    const script = document.createElement("script");

    script.onload = () => {
      initializeMeanMenu(); 
    };

    document.body.appendChild(script);

    
    const openMenuSidebar = () => {
      const menuSidebar = document.querySelector(".menu-sidebar-area");
      const bodyOverlay = document.querySelector(".body-overlay");
      menuSidebar.classList.add("active");
      bodyOverlay.classList.add("active");
      initializeMeanMenu(); 
    };

    
    const closeMenuSidebar = () => {
      const menuSidebar = document.querySelector(".menu-sidebar-area");
      const bodyOverlay = document.querySelector(".body-overlay");
      menuSidebar.classList.remove("active");
      bodyOverlay.classList.remove("active");
    };

    const initializeMeanMenu = () => {
      if (typeof meanMenu === "function") {
        meanMenu({
          meanMenuTarget: ".mobile-nav-menu",
          meanMenuContainer: "body",
          meanScreenWidth: 991,
          meanExpand: ['<i className="fal fa-plus"></i>'],
        });
      }
    };

    // Event listener for opening the menu sidebar
    document
      .querySelector(".mobile-menu-toggle-btn")
      .addEventListener("click", openMenuSidebar);

    // Event listener for closing the menu sidebar
    document
      .querySelector(".menu-sidebar-close-btn")
      .addEventListener("click", closeMenuSidebar);


  }, []);

  return (
    <div className="menu-sidebar-area">
      <div className="menu-sidebar-wrapper">
        <div className="menu-sidebar-close">
          <button
            className="menu-sidebar-close-btn"
            id="menu_sidebar_close_btn"
          >
            <i className="fal fa-times"></i>
          </button>
        </div>
        <div className="menu-sidebar-content">
          <div className="menu-sidebar-logo">
            <a href="#">
              <img src="images/logo/logo.png" alt="logo" />
            </a>
          </div>
          <div className="mobile-nav-menu mean-container" ref={menuRef}>
            <div className="mean-bar">
              <a
                href="#nav"
                className="meanmenu-reveal"
                style={{ right: "0px", left: "auto", display: "inline" }}
              >
                <span></span>
                <span></span>
                <span></span>
              </a>

              <nav id="main-menu mean-nav" className="main-menu mean-nav">
                <ul className="flex flex-col px-0 py-0">
                  <li className="dropdown active">
                    <NavLink to="#" className="px-0 py-0">Home</NavLink>
                    <ul>
                      <li>
                        <NavLink to="/">Home Page 1</NavLink>
                      </li>
                      <li>
                        <NavLink to="/home">Home Page 2</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#">Services</NavLink>
                    <ul className="submenu">
                      <li>
                        <NavLink to="/service">Service Page</NavLink>
                      </li>
                      <li>
                        <NavLink to="/user-experience">
                          Services Page Details
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/about-us">About</NavLink>
                  </li>
                  <li className="dropdown">
                    <a href="#">Pages</a>
                    <ul className="submenu">
                      <li>
                        <NavLink to="/project">Project Page</NavLink>
                      </li>
                      <li>
                        <NavLink to="/project-details">
                          Project Page Details
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/team">Team Members</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#">Blog</NavLink>
                    <ul className="submenu">
                      <li>
                        <NavLink to="/blog">Blog Page</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-details">Blog Page Details</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="menu-sidebar-content">
            <div className="menu-sidebar-single-widget">
              <h5 className="menu-sidebar-title">Contact Info</h5>
              <div className="header-contact-info">
                <span>
                  <i className="fa-solid fa-location-dot"></i>20, Bordeshi, New
                  York, US
                </span>
                <span>
                  <a href="mailto:hello@hivency.com">
                    <i className="fa-solid fa-envelope"></i>hello@hivency.com
                  </a>
                </span>
                <span>
                  <a href="tel:+123-456-7890">
                    <i className="fa-solid fa-phone"></i>+123-456-7890
                  </a>
                </span>
              </div>
              <div className="social-profile">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSidebar;
