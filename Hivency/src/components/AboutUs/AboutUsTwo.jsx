import React from "react";

function AboutUsTwo() {
    return ( 
        <div className="about-us-area style-2">
        <div className="container">
            <div className="row justify-center">
                <div className="sm:w-[66.6%] lg:w-[50%]">
                    <div className="section-title text-center ">
                        <div className="short-title">
                            <span>About us</span>
                        </div>
                        <h2 className="title">Design and development
                            across all <span className="underline1"> <img src="images/shape/underline.png" alt="underline"/> platforms</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="md:w-[100%]">
                    <div className="video-popup-card">
                        <div className="video-popup-image">
                            <img src="images/video-popup/popup-img-1.jpg" alt="popup image" />
                        </div>
                        <div className="video-popup-btn style-3">
                            <a href="https://www.youtube.com/watch?v=SZEflIVnhH8" className="mfp-iframe video-play">
                               <span className="icon"><i className="icon-play" aria-hidden="true"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default AboutUsTwo;