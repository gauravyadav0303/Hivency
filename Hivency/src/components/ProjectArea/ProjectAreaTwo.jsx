import React from "react";

function ProjectAreaTwo() {
  return (
    <div className="more-project-area">
      <div className="container">
        <div className="section-title-wrapper justify-between">
          <div className="section-title ">
            <div className="short-title">
              <span>More projects</span>
            </div>
            <h2 className="title">Our more projects</h2>
          </div>
          <a href="/project" className="theme-btn">
            <div className="swip">
              <div className="title-wrapper">
                <span className="title-1">View all</span>
                <span className="title-2">View all</span>
              </div>
            </div>
          </a>
        </div>
        <div className="row">
          <div className="sm:w-[50%]">
            <div className="project-card style-1">
              <div className="portfolio-card style-2">
                <div className="image">
                  <img
                    src="images/portfolio/image-1-large.jpg"
                    alt="portfolio"
                  />
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
              <div className="content-wrapper">
                <h4>Mobile app design</h4>
                <div className="tag-wrapper">
                  <span className="single-tag">App design</span>
                  <span className="single-tag secondary">User interface</span>
                </div>
                <p className="desc">
                  Ut enim ad minim veniam, quis nostrud exer cita tion ullamco
                  laboris nisi utim aliquip ex ea commodo con veniam, quis
                  nostrud exercitation minim venia
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%]">
            <div className="project-card style-1">
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
              <div className="content-wrapper">
                <h4>Mobile app design</h4>
                <div className="tag-wrapper">
                  <span className="single-tag">App design</span>
                  <span className="single-tag secondary">User interface</span>
                </div>
                <p className="desc">
                  Ut enim ad minim veniam, quis nostrud exer cita tion ullamco
                  laboris nisi utim aliquip ex ea commodo con veniam, quis
                  nostrud exercitation minim venia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectAreaTwo;
