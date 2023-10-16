import React, { useEffect } from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";

function Header() {
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    if (height > 1400) {
      const nav = $(".header-menu-area.sticky-header");
      let scrolled = false;
      $(window).scroll(function () {
        if (160 < $(window).scrollTop() && !scrolled) {
          nav
            .addClass("sticky_menu animated fadeIn")
            .animate({ "margin-top": "0px" });
          scrolled = true;
        }
        if (160 > $(window).scrollTop() && scrolled) {
          nav
            .removeClass("sticky_menu animated fadeIn")
            .css("margin-top", "0px");
          scrolled = false;
        }
      });
    }
  }, []);

  return (
    <>
      <header className="header-area">
        <div className="header-menu-area sticky-header">
          <div className="container">
            <div className="row flex ">
              <div className="sm:w-[50%] md:w-[25%] lg:w-[25%] flex items-center">
                <div className="logo">
                  <a href="/" className="standard-logo">
                    <img src="images/logo/logo.png" alt="logo" />
                  </a>
                  <a href="/" className="sticky-logo">
                    <img src="images/logo/logo.png" alt="logo" />
                  </a>
                  <a href="/" className="retina-logo">
                    <img src="images/logo/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="sm:w-[50%] md:w-[75%] lg:w-[75%] flex items-center sm:justify-end  lg:justify-between ">
                <div className="menu hidden md:inline-block">
                  <nav id="main-menu" className="main-menu">
                    <ul>
                      <li className="dropdown active">
                        <NavLink to="/">Home</NavLink>
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
                        <NavLink to="/service">Services</NavLink>
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
                        <NavLink to="/blog">Blog</NavLink>
                        <ul className="submenu">
                          <li>
                            <NavLink to="/blog">Blog Page</NavLink>
                          </li>
                          <li>
                            <NavLink to="/blog-details">
                              Blog Page Details
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="header-btn">
                  <a href="#" className="header-single-btn">
                    <div className="swip">
                      <div className="title-wrapper">
                        <span className="title-1">Sign in</span>
                        <span className="title-2">Sign in</span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="header-single-btn active">
                    <div className="swip">
                      <div className="title-wrapper">
                        <span className="title-1">Sign up</span>
                        <span className="title-2">Sign up</span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mobile-menu-bar md:hidden text-end">
                  <a href="#" className="mobile-menu-toggle-btn">
                    <i className="fal fa-bars"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  );
}

export default Header;
