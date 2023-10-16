import React from "react";

function HeroTwo() {
    return ( 
        <div className="hero-area style-2">
        <div className="sketch">
            <img src="images/shape/star-color.png" alt="sketch"/>
        </div>
        <div className="sketch-2">
            <img src="images/shape/multi-up-arrow.png" alt="sketch"/>
        </div>
        <div className="sketch-3">
            <img src="images/shape/part-of-round.png" alt="sketch"/>
        </div>
        <div className="container">
            <div className="row h-100 justify-content-between">
                <div className="col-lg-6 align-self-center">
                    <div className="content-wrapper">
                        <div className="hero-title">
                            <div className="short-title">
                                <span>Creative agency</span>
                            </div>
                            <h1 className="title">Fueling growth <span className="underline1"> <img src="images/shape/underline.png" alt="underline"/>goals</span> and ideas through branding </h1>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit asper natur aut <br/> oditut fugit seduia conse.</p>
                        </div>
                        <div className="btn-wrapper">
                            <a href="/about-us" className="theme-btn">
                                <div className="swip">
                                    <div className="title-wrapper">
                                        <span className="title-1">Learn more</span>
                                        <span className="title-2">Learn more</span>
                                    </div>
                                </div>
                            </a>
                            <div className="video-popup-btn style-2">
                                <a href="https://www.youtube.com/watch?v=SZEflIVnhH8" className="mfp-iframe video-play">
                                   <span className="icon"><i className="icon-play" aria-hidden="true"></i></span>
                                   <div className="swip">
                                    <div className="title-wrapper">
                                        <span className="title-1 text">Watch video</span>
                                        <span className="title-2 text">Watch video</span>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center p-0">
                    <div className="hero-image">
                        <img src="images/hero/hero-2.jpg" alt="feature image" />
                        <div className="work-activity">
                            <img src="images/hero/work-activity.png" alt="work-activity"/>
                        </div>
                        <div className="collaboration">
                            <span>
                                <img src="images/shape/hand-shake.png" alt="collaboration"/>
                            </span>
                            <h3>25+</h3>
                            <p>Partner <br/> Collaboration</p>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
     );
}

export default HeroTwo;