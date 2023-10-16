import React, { useEffect } from "react";
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

function PortfolioSlider() {

  useEffect(() => {
    const initializeSlider = () => {
      // Initialize the Slick slider
      $(".portfolio-slider").slick({
        slidesToShow: 3,
        infinite: true,
        autoplay: false,
        draggable: true,
        arrows: false,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        prevArrow:
          "<button type='button' className='testimonial-arrow-btn prev-btn'><i className='fa-solid fa-angle-left'></i></button>",
        nextArrow:
          "<button type='button' className='testimonial-arrow-btn next-btn'><i className='fa-solid fa-angle-right'></i></button>",
        responsive: [
          {
            breakpoint: 991,
            settings: {
              autoplay: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 554,
            settings: {
              autoplay: true,
              slidesToShow: 1,
            },
          },
        ],
      });
    };

    // Run the slider initialization when the component mounts
    initializeSlider();

    // Return a cleanup function to destroy the slider when the component unmounts
    return () => {
      $(".portfolio-slider").slick("unslick");
    };
  }, []);
  return (
    <div className="portfolio-slider-area style-1">
      <div className="container">
        <div className="section-title-wrapper justify-between">
          <div className="section-title">
            <div className="short-title">
              <span>Portfolio</span>
            </div>
            <h2 className="title">
              Immerse yourself in our <br />
              latest and most finest{" "}
              <span className="underline1">
                <img src="images/shape/underline.png" alt="underline" /> work{" "}
              </span>
            </h2>
          </div>
          <div className="">
            <a href="/about-us" className="theme-btn">
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
      <div className="portfolio-slider">
        <div className="portfolio-card slick-slide">
          <div className="image">
            <img src="images/portfolio/image-2.jpg" alt="portfolio" />
          </div>
          <div className="overlay"></div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <i className="icon-right-arrow"></i>
              </a>
            </div>
            <div className="text">
              <h4>Mobile app design</h4>
            </div>
          </div>
        </div>
        <div className="portfolio-card slick-slide">
          <div className="image">
            <img src="images/portfolio/image-1.jpg" alt="portfolio" />
          </div>
          <div className="overlay"></div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <i className="icon-right-arrow"></i>
              </a>
            </div>
            <div className="text">
              <h4>Mobile app design</h4>
            </div>
          </div>
        </div>
        <div className="portfolio-card slick-slide" >
          <div className="image">
            <img src="images/portfolio/image.jpg" alt="portfolio" />
          </div>
          <div className="overlay"></div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <i className="icon-right-arrow"></i>
              </a>
            </div>
            <div className="text">
              <h4>Mobile app design</h4>
            </div>
          </div>
        </div>
        <div className="portfolio-card slick-slide">
          <div className="image">
            <img src="images/portfolio/image-7.jpg" alt="portfolio" />
          </div>
          <div className="overlay"></div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <i className="icon-right-arrow"></i>
              </a>
            </div>
            <div className="text">
              <h4>Mobile app design</h4>
            </div>
          </div>
        </div>
        <div className="portfolio-card slick-slide">
          <div className="image">
            <img src="images/portfolio/image-2.jpg" alt="portfolio" />
          </div>
          <div className="overlay"></div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <i className="icon-right-arrow"></i>
              </a>
            </div>
            <div className="text">
              <h4>Mobile app design</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSlider;
