import React from "react";

function Footer() {
    return (     <footer className="footer">
    <div className="footer-sec">
        <span className="ball style-1"></span>
        <span className="ball style-2"></span>
        <span className="ball style-3"></span>
        <span className="ball style-4"></span>
        <div className="container">
            <div className="row">
                <div className="sm:w-[50%] md:w-[25%] lg:w-[25%]">
                    <div className="footer-widget">
                        <div className="footer-widget-info">
                            <div className="footer-logo">
                                <a href="#"><img src="images/logo/footer-logo.png"
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
                <div className="sm:w-[50%] md:w-[25%] lg:w-[25%]">
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
                <div className="sm:w-[50%] md:w-[25%] lg:w-[25%]">
                    <div className="footer-widget">
                        <h2 className="footer-widget-title">Recent Posts</h2>
                        <div className="widget_latest_post">
                            <ul>
                                <li>
                                    <div className="latest-post-thumb">
                                        <img src="images/blog/r1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-post-desc">
                                        <span className="latest-post-meta">January 13, 2023</span>
                                        <h3 className="latest-post-title"><a href="#">Acadian Non
                                                Emergency Transportation</a>
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="latest-post-thumb">
                                        <img src="images/blog/r2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-post-desc">
                                        <span className="latest-post-meta">January 13, 2023</span>
                                        <h3 className="latest-post-title"><a href="#">Can You Transport
                                                Furniture In Uber</a>
                                        </h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[50%] md:w-[25%] lg:w-[25%]">
                    <div className="footer-widget">
                        <h2 className="footer-widget-title">Instagram Links</h2>
                        <div className="widget-instagram-feed">
                            <div className="single-instagram-feed">
                                <img src="images/instagram/instagram-1.jpg" alt="instagram photo" />
                            </div>
                            <div className="single-instagram-feed">
                                <img src="images/instagram/instagram-2.jpg" alt="instagram photo" />
                            </div>
                            <div className="single-instagram-feed">
                                <img src="images/instagram/instagram-3.jpg" alt="instagram photo" />
                            </div>
                            <div className="single-instagram-feed">
                                <img src="images/instagram/instagram-4.jpg" alt="instagram photo" />
                            </div>
                            <div className="single-instagram-feed">
                                <img src="images/instagram/instagram-5.jpg" alt="instagram photo" />
                            </div>
                            <div className="single-instagram-feed">
                                <img src="images/instagram/instagram-6.jpg" alt="instagram photo" />
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
                        <p>Copyright &copy;  Creative Theme -  Built by <a href="#">CodeSpect Solutions</a></p>
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

export default Footer;