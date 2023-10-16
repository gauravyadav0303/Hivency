import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import $ from "jquery";

function TestamonialTwo() {
  useEffect(() => {
    let slickInitialized = false;

    const initializeSlider = () => {
      if (!slickInitialized) {
        $(".testimonial-slider-two").slick({
          slidesToShow: 3,
          infinite: true,
          autoplay: false,
          draggable: true,
          arrows: true,
          slidesToScroll: 1,
          loop: true,
          dots: false,
          speed: 1500,
          centerMode: true,
          rtl: false,
          prevArrow:
            "<button type='button' class='testimonial-arrow-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
          nextArrow:
            "<button type='button' class='testimonial-arrow-btn next-btn active'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
          responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 625,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });

        const sliderElm = $(".testimonial-slider-two");
        sliderElm.attr("dir", "ltr");

        // Arrow button active class
        $(".testimonial-arrow-btn").on("click", function () {
          $(".testimonial-arrow-btn").removeClass("active");
          $(this).addClass("active");
        });

        // Review-slider-area button trigger
        $("#review-prev").on("click", function (e) {
          e.preventDefault();
          $(".prev-btn").trigger("click");
        });
        $("#review-next").on("click", function (e) {
          e.preventDefault();
          $(".next-btn").trigger("click");
        });

        slickInitialized = true;
      }
    };

    initializeSlider()
  }, []);
  return (
    <div
      className="testimonial-slider-area style-2"
      style={{backgroundImage: 'url("images/testimonial/testimonial-2-bg.png")'}}
    >
      <div className="container">
        <div className="section-title-wrapper style-2">
          <div className="section-title text-center ">
            <div className="short-title">
              <span>Testimonial</span>
            </div>
            <h2 className="title">
              People{" "}
              <span className="underline1">
                <img src="images/shape/underline.png" alt="underline" /> talk
              </span>{" "}
              about us{" "}
            </h2>
            <p className="desc">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officiade
            </p>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="testimonial-slider-two" dir="rtl">
          <div className="testimonial-card style-2">
            <div className="sketch">
              <img src="images/testimonial/element.png" alt="shape" />
            </div>
            <div className="icon">
              <i className="icon-quote"></i>
            </div>
            <div className="content">
              <p className="text">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id es cupidatat non proident,
                sunt in culpa officia deserunt mollit”
              </p>
            </div>
            <div className="meta-user">
              <div className="image">
                <img src="images/meta/image.jpg" alt="user" />
              </div>
              <div className="user-info">
                <div className="info">
                  <h5>John Allendane</h5>
                  <p>Creative manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card style-2">
            <div className="sketch">
              <img src="images/testimonial/element.png" alt="shape" />
            </div>
            <div className="icon pink">
              <i className="icon-quote"></i>
            </div>
            <div className="content">
              <p className="text">
                “Ut enim ad minim veniam, quis nostrud exer citation ulla mco
                laboris nisi ut aliquip ex ea commodo con quis nostrud
                exercitation ullamco laboris aliquip”
              </p>
            </div>
            <div className="meta-user">
              <div className="image">
                <img src="images/meta/image-2.jpg" alt="user" />
              </div>
              <div className="user-info">
                <div className="info">
                  <h5>Esther Howard</h5>
                  <p>Ui designer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card style-2">
            <div className="sketch">
              <img src="images/testimonial/element.png" alt="shape" />
            </div>
            <div className="icon">
              <i className="icon-quote"></i>
            </div>
            <div className="content">
              <p className="text">
                Duis aute irure dolor in reprehen derit in voluptate velit es
                secillum dolore eu fugiat nulla pariatu reprehen derit in
                voluptate velit esse cillum dolore{" "}
              </p>
            </div>
            <div className="meta-user">
              <div className="image">
                <img src="images/meta/image.jpg" alt="user" />
              </div>
              <div className="user-info">
                <div className="info">
                  <h5>John Allendane</h5>
                  <p>Creative manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card style-2">
            <div className="sketch">
              <img src="images/testimonial/element.png" alt="shape" />
            </div>
            <div className="icon secondary">
              <i className="icon-quote"></i>
            </div>
            <div className="content">
              <p className="text">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id es cupidatat non proident,
                sunt in culpa officia deserunt mollit”
              </p>
            </div>
            <div className="meta-user">
              <div className="image">
                <img src="images/meta/image-3.jpg" alt="user" />
              </div>
              <div className="user-info">
                <div className="info">
                  <h5>Jane Cooper</h5>
                  <p>CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestamonialTwo;
