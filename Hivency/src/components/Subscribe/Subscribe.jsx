import React from "react";

function Subscribe() {
    return (  
        <div className="subscribe-form-area style-1">
        <div className="container">
           
            <div className="subscribe-area" style={{backgroundImage: 'url("images/shape/subscribe-bg.png")'}}>
                <div className="row justify-center">
                    <div className="sm:w-[83.33%] md:w-[66.67%] lg:w-[50%] p-0">
                        <div className="subscribe-inner-area">
                            <div className="section-title text-center">
                                <h2 className="title">Ready to get started with your new project today? </h2>
                                <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit asper natur aut oditut fugit Nemo enim ipsam voluptatem .</p>
                            </div>
                            <div className="subscribe-form-wrapper">
                                <div className="subscribe-form-widget">
                                    <form>
                                        <div className="mc4wp-form-fields">
                                            <div className="single-field">
                                                <input type="email" placeholder="Enter email address" />
                                            </div>
                                            <button className="submit-btn" type="submit">
                                                <div className="swip">
                                                    <div className="title-wrapper">
                                                        <span className="title-1">Submit now</span>
                                                        <span className="title-2">Submit now</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </form>
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

export default Subscribe;