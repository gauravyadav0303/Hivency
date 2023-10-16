import React from "react";

function ChooseUsTwo() {
    return ( 
        <div className="why-choose-area style-2">
        <div className="container">
            <div className="row justify-between align-items-center">
                <div className="md:w-[50%] order-2 order-lg-1">
                    <div className="about-info-card style-2">
                        <div className="section-title">
                            <div className="short-title">
                                <span>Why choose us</span>
                            </div>
                            <h2 className="title">A dedicated <span className="underline1"> <img src="images/shape/underline.png" alt="underline"/> solution</span>  for new startups and enterprises </h2>
                            <p className="desc">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, laborem consectectur, adipisci velit, sed quia non numquam eius modi temporadew incisdunt ut labore et dolore magnam aliquam</p>
                        </div>
                        <div className="list-item-wrapper">
                            <ul>
                                <li>Sunt in culpa qui officia deserunt mollit anim id es.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipis.</li>
                                <li>Sed do eiusmod tempor incidi sectet utlab.</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="theme-btn style-2">
                                <div className="swip">
                                    <div className="title-wrapper">
                                        <span className="title-1">Learn more</span>
                                        <span className="title-2">Learn more</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-[41.66%] order-1 order-lg-2">
                    <div className="about-image-card style-3">
                        <div className="main-img" >
                            <img src="images/why-choose/image-2.jpg" alt="why-choose"/>
                        </div>
                        <div className="visitor">
                            <img src="images/why-choose/visitors.png" alt="visitor"/>
                        </div>
                        <div className="status">
                            <img src="images/why-choose/status.png" alt="status"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default ChooseUsTwo;