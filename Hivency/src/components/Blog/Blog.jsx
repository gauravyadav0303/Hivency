import React from "react";

function Blog() {
    return (     <div className="latest-post-area style-1">
    <div className="container">
        <div className="row justify-center">
            <div className="col-md-8 sm:w-[50%]">
                <div className="section-title text-center">
                    <div className="short-title">
                        <span>Our blogs</span>
                    </div>
                    <h2 className="title">Read latest <span className="underline1"><img src="images/shape/underline.png" alt="underline"/> articles </span> from us  </h2>
                    <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit asper natur aut oditut fugit Nemo enim ipsam voluptatem .</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className=" sm:w-[50%] md:w-[33.33%]">
                
                <div className="post-card">
                    <div className="image">
                        <img src="images/latest-post/image.jpg" alt="post-1"/>
                    </div>
                    <div className="content">
                        <div className="tag-wrapper">
                            <a href="#" className="tag-item">
                                Branding
                            </a>
                        </div>
                        <h4 className="title">
                            <a href="#">Branding with personality: What makes you stand out</a>
                        </h4>
                        <div className="post-meta">
                            <a href="#">
                                <span className="date">
                                    <i className="icon-calendar"></i>
                                    April 22, 2022
                                </span>
                            </a>
                            <span className="time">
                                <i className="fa-solid fa-circle"></i>
                                <a href="#">5 min read</a>
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className=" sm:w-[50%] md:w-[33.33%]">
                
                <div className="post-card">
                    <div className="image">
                        <img src="images/latest-post/image-1.jpg" alt="post-1"/>
                    </div>
                    <div className="content">
                        <div className="tag-wrapper">
                            <a href="#" className="tag-item">
                                Ux design
                            </a>
                        </div>
                        <h4 className="title">
                            <a href="#">Is the generic visual brand guide outdated?</a>
                        </h4>
                        <div className="post-meta">
                            <a href="#">
                                <span className="date">
                                    <i className="icon-calendar"></i>
                                    April 22, 2022
                                </span>
                            </a>
                            <span className="time">
                                    <i className="fa-solid fa-circle"></i>
                                    5 min read
                            </span>
                        </div>
                    </div>
                </div>
              
            </div>
            <div className=" sm:w-[50%] md:w-[33.33%]">
             
                <div className="post-card">
                    <div className="image">
                        <img src="images/latest-post/image-2.jpg" alt="post-1"/>
                    </div>
                    <div className="content">
                        <div className="tag-wrapper">
                            <a href="#" className="tag-item">
                                Web development
                            </a>
                        </div>
                        <h4 className="title">
                            <a href="#">30 ads that made our heads turn: Making ads that convert</a>
                        </h4>
                        <div className="post-meta">
                            <a href="#">
                                <span className="date">
                                    <i className="icon-calendar"></i>
                                    April 22, 2022
                                </span>
                            </a>
                            <span className="time">
                                    <i className="fa-solid fa-circle"></i>
                                    5 min read
                            </span>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</div> );
}

export default Blog;