import React from "react";

function AboutUs() {
    return ( 
        <div className="about-us-area style-1 overflow-hidden">
        <div className="container">
            <div className="row justify-between align-items-center">
                <div className="col-lg-6 col-xl-5">
                    <div className="about-image-card">
                        <div className="sketch">
                            <img src="images/shape/horn.png" alt="sketch"/>
                        </div>
                        <div className="main-img " >
                            <img src="images/why-choose/image.png" alt="about-us"/>
                        </div>
                        <div className="team-card">
                            <h5>Expert Team <br/> Members</h5>
                            <div className="users">
                                <span>
                                    <img src="images/about/image.jpg" alt="member"/>
                                </span>
                                <span>
                                    <img src="images/about/image-1.jpg" alt="member"/>
                                </span>
                                <span>
                                    <img src="images/about/image-2.jpg" alt="member"/>
                                </span>
                                <span>
                                    <img src="images/about/image-3.jpg" alt="member"/>
                                </span>
                                <span>
                                    +7
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-info-card">
                            <div className="section-title">
                                <div className="short-title">
                                    <span>About us</span>
                                </div>
                                <h2 className="title">A dedicated <span className="underline1"> <img src="images/shape/underline.png" alt="underline"/> solution</span> for new <br/> startups and enterprises</h2>
                                <p className="desc">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, laborem consectectur, adipisci velit, sed quia non numquam eius modi temporadew incisdunt ut labore et dolore magnam aliquam</p>
                            </div>
                            <div className="icon-card-wrapper">
                                <div className="icon-card">
                                    <div className="icon">
                                        <i className="icon-light"></i>
                                    </div>
                                    <div className="content">
                                      <h2 className="title">
                                        <a href="#">UI/UX design</a>
                                      </h2>
                                      <p className="desc">Neque porro quisquam est, qui dolorem ipsum quia dolor sit</p>
                                    </div>
                                  </div>
                                <div className="icon-card">
                                    <div className="icon secondary">
                                        <i className="icon-coffee"></i>
                                    </div>
                                    <div className="content">
                                      <h2 className="title">
                                        <a href="#">Web development</a>
                                        </h2>
                                      <p className="desc">Nemo enim ipsam voluptatem voluptas asper natur oditut </p>
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

export default AboutUs;