import React from "react";

function ServiceCard() {
    return ( 

        <div className="icon-card-wrapper">
                <div className="row">
                    <div className="sm:w-[50%] md:w-[33.33%]">
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
                              <p className="desc">Nemo enim ipsam voluptatem quiamet voluptas asper natur oditut </p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[50%] md:w-[33.33%]">
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
                              <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[50%] md:w-[33.33%]">
                        <div className="icon-card style-2">
                            <div className="sketch">
                                <img src="images/shape/wave.png" alt="shape"/>
                            </div>
                            <div className="icon">
                                <i className="icon-colorfilter"></i>
                            </div>
                            <div className="content">
                              <h2 className="title"> <a href="/user-experience"> Web design </a> </h2>
                              <p className="desc">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

     );
}

export default ServiceCard;