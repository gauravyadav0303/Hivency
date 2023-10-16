import React,{useEffect} from "react";
// import $ from "jquery";
// import "counterup";


   function ChooseUs() {
//     useEffect(() => {
//         $(".counter").counterUp({
//             delay: 10,
//             time: 1000,
//         });
// }, []);

    return ( 
        <div className="why-choose-area style-1 overflow-hidden">
        <div className="sketch">
            <img src="images/shape/curly.png" alt="sketch"/>
        </div>
        <div className="container">
            <div className="row justify-between align-items-center">
                <div className="md:w-[41.67%]">
                    <div className="about-image-card style-2">
                        <div className="main-img" >
                            <img src="images/about/about-1.png" alt="about-us"/>
                        </div>
                        <div className="visitor">
                            <img src="images/why-choose/visitors.png" alt="visitor"/>
                        </div>
                        <div className="status">
                            <img src="images/why-choose/status.png" alt="status"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="about-info-card">
                            <div className="section-title">
                                <div className="short-title">
                                    <span>Why choose us</span>
                                </div>
                                <h2 className="title">Maximize your<span className="underline1"> <img src="images/shape/underline.png" alt="underline"/> reach</span> with seo-driven wordpress magic</h2>
                                <p className="desc">Ut enim ad minim veniam, quis nostrud exer citation ullamco labo ris nisi ut aliq uip ex ea commodo con quis nostrud exercitation ullamco labo ris nisi ut aliq uip ullamco laboris nisi ut </p>
                            </div>
                            <div className="counter-card-wrapper">
                                <div className="counter-item">
                                    <div className="counter-title">
                                        <h2 className="number">
                                            <span className="counter">25</span>
                                            <span>K+</span>
                                        </h2>
                                        <p className="title">New users per week</p>
                                    </div>
                                </div>
                                <div className="counter-item">
                                    <div className="counter-title">
                                        <h2 className="number">
                                            <span className="counter">100</span>
                                            <span>M+</span>
                                        </h2>
                                        <p className="title">Monthly active user</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-wrapper">
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
            </div>
        </div>
    </div>
     );
}

export default ChooseUs;