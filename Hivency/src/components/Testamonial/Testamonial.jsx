import React, {useEffect} from "react";
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import ClientSlider from "../ClientSlider/ClientSlider";


function Testamonial() {
    useEffect(() => {
        const initializeSlider = () => {
          // Initialize the Slick slider
          $(".testimonial-slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

       
          // arrow button active class
          $(".testimonial-arrow-btn").on("click", function () {
            $(".testimonial-arrow-btn").removeClass("active");
            $(this).addClass("active");
          });
        };
        
        // Run the slider initialization when the component mounts
        initializeSlider();
        
        // Return a cleanup function to destroy the slider when the component unmounts
        return () => {
          $(".testimonial-slider").slick("unslick");
        };
    }, []);
    


    return ( 

        <div className="testimonial-slider-area style-1">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center style-2">
                        <div className="short-title">
                            <span>Testimonial</span>
                        </div>
                        <h2 className="title">People <span className="underline1"><img src="images/shape/underline.png" alt="underline"/> talk </span> about us </h2>
                        <p className="desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiade</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-slider">
                <div className="testimonial-card">
                        <div className="icon">
                            <img src="images/shape/quote.png" alt="quote" />
                        </div>
                        <div className="content">
                            <p className="text">“Ut enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation ullamco laboris aliquip ad minim veniam, quis nostrud exer”</p>
                        </div>
                        <div className="meta-user">
                            <div className="image">
                                <img src="images/meta/image-3.jpg" alt="user"/>
                            </div>
                            <div className="user-info">
                                <div className="info">
                                    <h5>Jane Cooper</h5>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="testimonial-card">
                        <div className="icon">
                            <img src="images/shape/quote.png" alt="quote" />
                        </div>
                        <div className="content">
                            <p className="text">“Ut enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation ullamco laboris aliquip ad minim veniam, quis nostrud exer”</p>
                        </div>
                        <div className="meta-user">
                            <div className="image">
                                <img src="images/meta/image.jpg" alt="user"/>
                            </div>
                            <div className="user-info">
                                <div className="info">
                                    <h5>John Allendane</h5>
                                    <p>Creative manager</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="testimonial-card">
                        <div className="icon">
                            <img src="images/shape/quote.png" alt="quote" />
                        </div>
                        <div className="content">
                            <p className="text">“Ut enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation ullamco laboris aliquip ad minim veniam, quis nostrud exer”</p>
                        </div>
                        <div className="meta-user">
                            <div className="image">
                                <img src="images/meta/image-2.jpg" alt="user"/>
                            </div>
                            <div className="user-info">
                                <div className="info">
                                    <h5>Esther Howard</h5>
                                    <p>Ui designer</p>
                                </div> 
                            </div>
                        </div>
                </div>
            </div>
    <ClientSlider/>
    
        </div>
    </div>

     );
}

export default Testamonial;