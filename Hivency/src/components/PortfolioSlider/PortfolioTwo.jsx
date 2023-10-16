import React from "react";

function PortfolioTwo() {
  return (
    <div className="portfolio-slider-area style-1 style-2">
      <div className="container">
        <div className="row justify-center">
          <div className="sm:w[66.67%] lg:w-[50%]">
            <div className="section-title text-center ">
              <div className="short-title">
                <span>Portfolio</span>
              </div>
              <h2 className="title">
                Immerse yourself in our latest and most finest{" "}
                <span className="underline1">
                  <img src="images/shape/underline.png" alt="underline" /> work
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-6">
          <div className="sm:w-[50%]">
            <div className="portfolio-card style-2">
              <div className="image">
                <img src="images/portfolio/image-2-large.jpg" alt="portfolio" />
              </div>
              <div className="overlay"></div>
              <div className="content">
                <div className="icon">
                  <a href="#">
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%]">
            <div className="portfolio-card style-2">
              <div className="image">
                <img src="images/portfolio/image-1-large.jpg" alt="portfolio" />
              </div>
              <div className="overlay"></div>
              <div className="content">
                <div className="icon">
                  <a href="#">
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%]">
            <div className="portfolio-card style-2">
              <div className="image">
                <img src="images/portfolio/image-3.jpg" alt="portfolio" />
              </div>
              <div className="overlay"></div>
              <div className="content">
                <div className="icon">
                  <a href="#">
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%]">
            <div className="portfolio-card style-2">
              <div className="image">
                <img src="images/portfolio/image-4.jpg" alt="portfolio" />
              </div>
              <div className="overlay"></div>
              <div className="content">
                <div className="icon">
                  <a href="#">
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <a href="/project" className="theme-btn">
            <div className="swip">
              <div className="title-wrapper">
                <span className="title-1">View all</span>
                <span className="title-2">View all</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioTwo;
