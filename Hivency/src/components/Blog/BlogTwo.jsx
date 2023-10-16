import React from "react";

function BlogTwo() {
    return (     <div className="latest-post-area style-1">
    <div className="container">
        <div className="row justify-center">
            <div className="sm:w-[66.67%] lg:w-[50%]">
                <div className="section-title text-center">
                    <div className="short-title">
                        <span>Our blogs</span>
                    </div>
                    <h2 className="title">Read latest <span className="underline1"><img src="images/shape/underline.png" alt="underline"/> articles </span> from us  </h2>
                    <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="sm:w-[100%] md:w-[50%]">
              
                <div className="post-card style-2">
                    <div className="image">
                        <img src="images/blog/image.jpg" alt="post-1"/>
                    </div>
                    <div className="content">
                        <div className="tag-wrapper">
                            <div className="post-meta">
                                <span className="date">
                                    April 22, 2022
                                </span>
                                <span className="time">
                                    <i className="fa-solid fa-circle"></i>
                                    <a href="#">5 min read</a>
                                </span>
                            </div>
                            <div>
                                <a href="#">
                                    <span className="tag-item">Branding</span>
                                </a>
                            </div>
                        </div>
                        <h4 className="title">
                            <a href="#">Branding with personality: What makes you stand out we will let you know</a>
                        </h4>
                        <a href="#" className="post-btn">Read more</a>
                    </div>
                </div>
              
            </div>
            <div className="sm:w-[100%] md:w-[50%]">
               
                <div className="post-card style-2">
                    <div className="image">
                        <img src="images/blog/image-1.jpg" alt="post-1"/>
                    </div>
                    <div className="content">
                        <div className="tag-wrapper">
                            <div className="post-meta">
                                <span className="date">
                                    April 22, 2022
                                </span>
                                <span className="time">
                                    <i className="fa-solid fa-circle"></i>
                                    <a href="#">5 min read</a>
                                </span>
                            </div>
                            <div>
                                <a href="#">
                                    <span className="tag-item">Ux design</span>
                                </a>
                            </div>
                        </div>
                        <h4 className="title">
                            <a href="#">Is the generic visual brand guide outdated: What makes you stand out</a>
                        </h4>
                        <a href="#" className="post-btn">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> );
}

export default BlogTwo;