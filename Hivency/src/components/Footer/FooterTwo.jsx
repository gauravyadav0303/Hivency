import React from "react";

function FooterTwo() {
    return ( 

        <footer className="footer">
        <div className="footer-sec">
            <span className="ball style-1"></span>
            <span className="ball style-2"></span>
            <span className="ball style-3"></span>
            <span className="ball style-4"></span>
            <div className="container">
                <div className="row">
                    <div className="sm:w-[50%] md:w-[33.33%] lg:w-[33.33%]">
                        <div className="footer-widget">
                            <div className="footer-widget-info">
                                <div className="footer-logo">
                                    <a href="/"><img src="images/logo/footer-logo.png"
                                            alt="Footer Logo" /></a>
                                </div>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, laborem con sectec tur</p>
                                <div className="social-profile">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[50%] md:w-[33.33%] lg:w-[33.33%]">
                        <div className="row">
                            <div className="sm:w-[50%] md:w-[50%]">
                                <div className="footer-widget widget_nav_menu">
                                    <h2 className="footer-widget-title">Pages</h2>
                                    <ul className="menu">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about-us">About</a></li>
                                        <li><a href="/service">Service</a></li>
                                        <li><a href="/user-experience">service-details</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sm:w-[50%] md:w-[50%]">
                                <div className="footer-widget widget_nav_menu">
                                    <h2 className="footer-widget-title">Company</h2>
                                    <ul>
                                        <li><a href="/project">Project</a></li>
                                        <li><a href="/project-details">Project detail</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/blog-details">Blog detail</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[50%] md:w-[33.33%] lg:w-[33.33%]">
                        <div className="subscribe-area style-2">
                            <div className="subscribe-inner-area">
                                <div className="section-title">
                                    <h2 className="title">Subscribe Newsletter</h2>
                                    <p className="desc">Subscribe our newsletter to get more.</p>
                                </div>
                                <div className="subscribe-form-wrapper">
                                    <div className="subscribe-form-widget">
                                        <form>
                                            <div className="mc4wp-form-fields">
                                                <div className="single-field">
                                                    <input type="email" placeholder="Email address" />
                                                </div>
                                                <button className="submit-btn" type="submit">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="footer-bottom-border"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="copyright-text">
                            <p>Copyright &copy;  Creative Theme -  Built by <a href="https://boomdevs.com/">BoomDevs</a></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer-bottom-menu">
                            <ul>
                                <li>
                                    <a href="/contact-us">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms & conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

     );
}

export default FooterTwo;