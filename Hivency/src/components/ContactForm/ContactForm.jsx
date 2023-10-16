import React from "react";

function ContactForm() {
    return (

        <div className="contact-form-area">

        <div className="container">
            <div className="row">
                <div className="md:w-[41.33%]">
                    <div className="video-popup-card">
                        <div className="video-popup-image">
                            <img src="images/video-popup/popup-img-2.jpg" alt="popup image" />
                        </div>
                        <div className="video-popup-btn style-2">
                            <a href="https://www.youtube.com/watch?v=SZEflIVnhH8" className="mfp-iframe video-play">
                               <span className="icon"><i className="icon-play" aria-hidden="true"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-[58.67%]">
                    
                    <div  className="comment-respond">
                        <form method="post" className="comment-form">
                            <div className="row g-6 ">
                                <div className="sm:w-[50%]">
                                    <div className="contacts-name">
                                        <label>Full name</label>
                                        <input name="author" type="text" placeholder="Enter your name"/>
                                    </div>
                                </div>
                                <div className="sm:w-[50%]">
                                    <div className="contacts-email">
                                        <label>Email</label>
                                        <input name="email" type="text" placeholder="Enter your email"/>
                                    </div>
                                </div>
                                <div className="sm:w-[50%]">
                                    <div className="contacts-name">
                                        <label>Phone number</label>
                                        <input name="author" type="text" placeholder="Enter your number"/>
                                    </div>
                                </div>
                                <div className="sm:w-[50%]">
                                    <div className="contacts-email">
                                        <label>Subject</label>
                                        <input name="email" type="text" placeholder="Enter your subject"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="contacts-message">
                                        <label>Your comment</label>
                                        <textarea name="comment" cols="20" rows="3"
                                            placeholder="Enter Your Comments"></textarea>
                                    </div>
                                </div>
                                <div >
                                    <button type="submit" className="theme-btn">
                                        <div className="swip">
                                            <div className="title-wrapper">
                                                <span className="title-1">Submit now</span>
                                                <span className="title-2">Submit now</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

      );
}

export default ContactForm;