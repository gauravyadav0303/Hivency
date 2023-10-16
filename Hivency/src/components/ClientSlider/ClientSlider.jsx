import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import $ from "jquery";

function ClientSlider() {
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);

  useEffect(() => {
    const initializeSlider = () => {
      // Check if the slider is already initialized
      if (!isSliderInitialized) {
        const clientSlider = $(".client-logo-wrapper");

        // Initialize the Slick slider
        clientSlider.slick({
          slidesToShow: 5,
          infinite: true,
          autoplay: true,
          draggable: true,
          arrows: false,
          slidesToScroll: 1,
          loop: true,
          dots: false,
          speed: 1500,
          rtl: false,
          prevArrow:
            "<button type='button' class='testimonial-arrow-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
          nextArrow:
            "<button type='button' class='testimonial-arrow-btn next-btn active'><div class='swip'><div class 'title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });

        setIsSliderInitialized(true);
      }
    };

    // Set a timeout to initialize the slider after a brief delay
    const initTimeout = setTimeout(() => {
      initializeSlider();
    }, 100); // Adjust the delay as needed

    // Return a cleanup function to clear the timeout
    return () => {
      clearTimeout(initTimeout);
    };
  }, [isSliderInitialized]);

  return (
    <div className="client-logo-area style-1">
      <div className="container">
        <div className="client-logo-wrapper">
          <div className="client-logo">
            <div className="client-swip">
              <div className="title-wrapper">
                <img
                  className="title-1"
                  src="images/client-logo/dropbox.png"
                  alt="client-logo"
                />
                <img
                  className="title-2"
                  src="images/client-logo/dropbox.png"
                  alt="client-logo"
                />
              </div>
            </div>
          </div>
          <div className="client-logo">
            <div className="client-swip">
              <div className="title-wrapper">
                <img
                  className="title-1"
                  src="images/client-logo/databricks.png"
                  alt="client-logo"
                />
                <img
                  className="title-2"
                  src="images/client-logo/databricks.png"
                  alt="client-logo"
                />
              </div>
            </div>
          </div>
          <div className="client-logo">
            <div className="client-swip">
              <div className="title-wrapper">
                <img
                  className="title-1"
                  src="images/client-logo/google.png"
                  alt="client-logo"
                />
                <img
                  className="title-2"
                  src="images/client-logo/google.png"
                  alt="client-logo"
                />
              </div>
            </div>
          </div>
          <div className="client-logo">
            <div className="client-swip">
              <div className="title-wrapper">
                <img
                  className="title-1"
                  src="images/client-logo/trustpilot.png"
                  alt="client-logo"
                />
                <img
                  className="title-2"
                  src="images/client-logo/trustpilot.png"
                  alt="client-logo"
                />
              </div>
            </div>
          </div>
          <div className="client-logo">
            <div className="client-swip">
              <div className="title-wrapper">
                <img
                  className="title-1"
                  src="images/client-logo/notion.png"
                  alt="client-logo"
                />
                <img
                  className="title-2"
                  src="images/client-logo/notion.png"
                  alt="client-logo"
                />
              </div>
            </div>
          </div>
          <div className="client-logo">
            <div className="client-swip">
              <div className="title-wrapper">
                <img
                  className="title-1"
                  src="images/client-logo/trustpilot.png"
                  alt="client-logo"
                />
                <img
                  className="title-2"
                  src="images/client-logo/trustpilot.png"
                  alt="client-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSlider;
