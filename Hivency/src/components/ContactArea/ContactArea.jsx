import React from "react";

function ContactArea() {
    return ( 

        <div className="contact-info-area">
        <div className="container">
            <div className="icon-card-wrapper">
                <div className="row">
                    <div className="sm:w-[50%] md:w-[33.33%]">
                        <div className="icon-card style-3">
                            <div className="sketch">
                                <img src="images/shape/wave.png" alt="shape"/>
                            </div>
                            <div className="icon secondary">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="content">
                              <h2 className="title">
                                Sales & Inquiries
                              </h2>
                              <p className="desc">Nemo enim ipsam voluptatem quiamet voluptas asper natur oditut </p>
                            </div>
                            <div className="contact-info">
                                <h6>
                                    <a href="mailto:info@example.com">
                                        Info @example.com
                                    </a>
                                </h6>
                                <p>
                                    <a href="tel:+1-202-555-0144">
                                        +1-202-555-0144
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[50%] md:w-[33.33%]">
                        <div className="icon-card style-3">
                            <div className="sketch">
                                <img src="images/shape/wave.png" alt="shape"/>
                            </div>
                            <div className="icon primary">
                                <i className="icon-help-support"></i>
                            </div>
                            <div className="content">
                              <h2 className="title">
                                Help & Support
                            </h2>
                              <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                            <div className="contact-info">
                                <h6>
                                    <a href="mailto:info@example.com">
                                        Info @example.com
                                    </a>
                                </h6>
                                <p>
                                    <a href="tel:+1-202-555-0144">
                                        +1-202-555-0144
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[50%] md:w-[33.33%]">
                        <div className="icon-card style-3">
                            <div className="sketch">
                                <img src="images/shape/wave.png" alt="shape"/>
                            </div>
                            <div className="icon">
                                <i className="icon-analysis"></i>
                            </div>
                            <div className="content">
                              <h2 className="title"> Media & Press </h2>
                              <p className="desc">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                            </div>
                            <div className="contact-info">
                                <h6>
                                    <a href="mailto:info@example.com">
                                        Info @example.com
                                    </a>
                                </h6>
                                <p>
                                    <a href="tel:+1-202-555-0144">
                                        +1-202-555-0144
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     );
}

export default ContactArea;