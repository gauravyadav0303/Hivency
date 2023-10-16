import React from "react";

function ServicesTwo() {
    return ( 
        <div className="service-area style-1 style-2">
        <div className="container">
            <div className="row flex">
                <div className="lg:w-[41.66%] justify-center items-center">
                    <div className="content-wrapper">
                        <div className="sketch-2">
                            <img src="images/shape/curly-arrow.png" alt="sketch"/>
                        </div>
                        <div className="section-title ">
                            <div className="short-title">
                                <span>Our services</span>
                            </div>
                            <h2 className="title">We're at your service <br/> to give the best<span className="underline1"><img src="images/shape/underline.png" alt="underline"/> website</span></h2>
                               <p className="desc">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet laborem consectectur, adipisci velit, sed quia non num qu am eius modi temporadew incisdunt ut labore et</p>
                        </div>
                        <div className="service-btn">
                            <a href="/service" className="theme-btn">
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
                <div className="lg:w-[58.33%]">
                    <div className="icon-card-wrapper">
                        <div className="duo-wrapper">
                            <div className="icon-card style-2">
                                <div className="sketch">
                                    <img src="images/shape/wave.png" alt="shape"/>
                                </div>
                                <div className="icon primary">
                                    <i className="icon-flash"></i>
                                </div>
                                <div className="content">
                                  <h2 className="title">
                                    <a href="/user-experience">Digital strategy</a>
                                </h2>
                                  <p className="desc">Duis aute irure dolor in reprehen der itin voluptate velit esse</p>
                                </div>
                            </div>
                        </div>
                        <div className="duo-wrapper">
                                <div className="icon-card style-2">
                                    <div className="sketch">
                                        <img src="images/shape/wave.png" alt="shape"/>
                                    </div>
                                    <div className="icon secondary">
                                        <i className="icon-box"></i>
                                    </div>
                                    <div className="content">
                                      <h2 className="title">
                                        <a href="/user-experience">User experience</a>
                                      </h2>
                                      <p className="desc">Nemo enim ipsam voluptatem quia met voluptas asper </p>
                                    </div>
                                </div>
                                <div className="icon-card style-2">
                                    <div className="sketch">
                                        <img src="images/shape/wave.png" alt="shape"/>
                                    </div>
                                    <div className="icon">
                                        <i className="icon-colorfilter"></i>
                                    </div>
                                    <div className="content">
                                      <h2 className="title">
                                        <a href="/user-experience">
                                            Web design
                                        </a>
                                      </h2>
                                      <p className="desc">Ut enim ad minima veniam, quis nos trum exercitationem</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default ServicesTwo;