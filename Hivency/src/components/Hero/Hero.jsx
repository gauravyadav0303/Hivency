import React from "react";


function Hero() {
    return ( 

        <div className="hero-area style-1" >
        <div className="sketch">
            <img src="images/shape/star.png" alt="sketch"/>
        </div>
        <div className="sketch-2">
            <img src="images/shape/single-star.png" alt="sketch"/>
        </div>
        <div className="container">
            <div className="row h-22 justify-between flex">
                <div className="col-lg-6 col-xl-5 self-center">
                    <div className="content-wrapper">
                        <div className="hero-title">
                            <div className="short-title">
                                <span>Creative agency</span>
                            </div>
                            <h1 className="title">Branding for your growth <span className="underline1"> <img src="images/shape/underline.png" alt="underline"/>goals</span> and creative ideas</h1>
                            <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit asper natur aut oditut fugit seduia conse.</p>
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
                            <div className="video-popup-btn">
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
                <div className="col-lg-6 col-xl-6 align-self-end">
                    <div className="hero-image">
                        <div className="main-img">
                            <img src="images/hero/hero-1.jpg" alt="feature image" />
                        </div>
                        <div className="work-activity">
                            <img src="images/hero/work-activity.png" alt="work-activity"/>
                        </div>
                        <div className="profits">
                            <div className="icon">
                                <i className="icon-euro"></i>
                            </div>
                            <div className="content">
                                <span>Profits Earned</span>
                                <h5>850K</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>

     );
}

export default Hero;