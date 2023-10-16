import React from "react";

function BlogAreaTwo() {
  return (
    <div className="blog-area">
      <div className="container">
        <div className="row">
          <div className="md:w-[58.33%] blog-details-wrapper">
            <article className="single-post-item">
              <div className="post-thumbnail">
                <a href="#">
                  <img src="images/blog/image.jpg" alt="Blog Image" />
                </a>
              </div>
              <div className="post-content-wrapper">
                <div className="content-header">
                  <div className="post-meta">
                    <span>
                      {" "}
                      <img
                        src="images/blog/single-post-meta.png"
                        alt="blog"
                      />{" "}
                      John doe
                    </span>
                  </div>
                  <div className="info">
                    <span>
                      <i className="fa-solid fa-circle"></i>
                      April 22, 2022
                    </span>
                    <span>
                      <i className="fa-solid fa-circle"></i>5 min read
                    </span>
                  </div>
                  <div className="tag-wrapper">
                    <a href="#">
                      <span className="tag">Branding</span>
                    </a>
                  </div>
                </div>
                <h3 className="post-title">
                  <a href="#">
                    Branding with personality: What makes you stand out we will
                    let you know
                  </a>
                </h3>
                <div className="post-content">
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, laborem consectectur, adipisci velit, sed quia non
                    numquam eius modi temporadew incisdunt ut labore et dolore
                    magnam aliquam Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui offici deserunt mollit anim id
                    est enim ad minim veniam, quis nostrud exercitation ullam co
                    labr is nisi ut aliquip ex Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo con. Duis aute irure dolor in reprehenderit in
                    voluptate velitesse cillum dolore eu fugiat nulla pariatu
                    sint occaecat cupidatat non proident, sunt in culpa{" "}
                  </p>
                  <p className="image-wrapper">
                    <img src="images/blog-detail/image.jpg" alt="image" />
                  </p>
                  <h5>What we learned from this project :</h5>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pa atu sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollitanim ide enim ad minim veniam fugiat nulla pariatu
                    sint occaecat cupidatat nonproid
                  </p>
                  <div className="list-item-wrapper">
                    <ul>
                      <li>Sunt in culpa qui officia deserunt mollit</li>
                      <li>Lorem ipsum dolor sit amet, consecte</li>
                      <li>Sed do eiusmod tempor incidi secte</li>
                    </ul>
                  </div>
                  <blockquote>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con consequatu ea
                      commodo con Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi{" "}
                    </p>
                    <footer>
                      Arlene McCoy
                      <img src="images/blog-detail/quote.png" alt="quote" />
                    </footer>
                  </blockquote>
                </div>
                <div className="single-post-meta">
                  <div className="blog-post-tag">
                    <div className="post-tag-list">
                      <a href="#">Branding</a>
                      <a href="#" className="secondary">
                        User interface
                      </a>
                    </div>
                  </div>
                  <div className="social-share">
                    <a className="facebook" href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a className="twitter" href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a className="twitter" href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <div className="author-info">
              <div className="author-thumb">
                <a href="#">
                  <img
                    alt="author"
                    src="images/blog-detail/autho.png"
                    className="avatar avatar-190 photo media-object"
                    height="165"
                    width="165"
                  />
                </a>
              </div>
              <div className="author-text">
                <div className="title-wrapper">
                  <div className="title">
                    <h3>
                      <a href="#">Arlene McCoy</a>
                    </h3>
                    <span className="designation">Chief Advisor</span>
                  </div>
                  <div className="author-social-profiles">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id es conse quatu ea commodo
                  con quis nostrud
                </p>
              </div>
            </div>

            <div className="post-comments-form">
              <div className="post-comments-title">
                <h2>Leave a reply</h2>
              </div>
              <div className="comment-respond">
                <form
                  action="#"
                  method="post"
                  className="comment-form"
                >
                  <div className="row g-2">
                    <div>
                      <div className="contacts-name">
                        <label>Full name</label>
                        <input
                          name="author"
                          type="text"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div >
                      <div className="contacts-email">
                        <label>Email</label>
                        <input
                          name="email"
                          type="text"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="contacts-message">
                        <label>Your comment</label>
                        <textarea
                          name="comment"
                          cols="20"
                          rows="3"
                          placeholder="Enter Your Comments"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="theme-btn" type="submit">
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

          <div className="md:w-[41.33%] order-1 order-lg-2">
            <div className="sidebar">
              <div className="widget widget_search">
                <div className="widget-title-box">
                  <h4 className="wp-block-heading">Search</h4>
                </div>
                <form
                  className="search-form"
                  action="#"
                  method="get"
                >
                  <input type="text" placeholder="Search.." />
                  <button type="submit">
                    <i className="icon-search"></i>
                  </button>
                </form>
              </div>
              <div className="widget widget_latest_post">
                <div className="widget-title-box">
                  <h4 className="wp-block-heading">Recent Posts</h4>
                </div>
                <ul>
                  <li>
                    <div className="latest-post-thumb">
                      <img src="images/blog/recent-img.jpg" alt="" />
                    </div>
                    <div className="latest-post-desc">
                      <h3 className="latest-post-title">
                        <a href="#">
                          Building a brand logo, and what most people get wrong
                          while making it
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="latest-post-thumb">
                      <img src="images/blog/recent-img-1.jpg" alt="" />
                    </div>
                    <div className="latest-post-desc">
                      <h3 className="latest-post-title">
                        <a href="#">
                          How to translate your brand strategy into marketing
                          design lets see
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="latest-post-thumb">
                      <img src="images/blog/recent-img-2.jpg" alt="" />
                    </div>
                    <div className="latest-post-desc">
                      <h3 className="latest-post-title">
                        <a href="#">
                          7 brands with Instagram superpowers we dont know about
                          them
                        </a>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget_categories">
                <div className="widget-title-box">
                  <h4 className="wp-block-heading">Categories</h4>
                </div>
                <ul>
                  <li>
                    <a href="#">Startup</a>(1)
                  </li>
                  <li>
                    <a href="#">Tech</a>(3)
                  </li>
                  <li>
                    <a href="#">Technology</a>(2)
                  </li>
                  <li>
                    <a href="#">Uncategorized</a>(4)
                  </li>
                </ul>
              </div>
              <div className="widget widget_tag_cloud">
                <div className="widget-title-box">
                  <h4 className="wp-block-heading">Tags</h4>
                </div>
                <div className="tagcloud">
                  <a href="#">Asset</a>
                  <a href="#">Technology</a>
                  <a href="#">Business</a>
                  <a href="#">Design</a>
                  <a href="#">Trends</a>
                  <a href="#">Finance</a>
                  <a href="#">Digital</a>
                  <a href="#">Web design</a>
                  <a href="#">Crypto</a>
                  <a href="#">UI/UX</a>
                  <a href="#">Article</a>
                  <a href="#">Mobile app</a>
                </div>
              </div>
              <div className="widget widget_contact_us">
                <h3>
                  Need a human? <br />
                  Let’s talk.
                </h3>
                <a href="/contact" className="theme-btn">
                  <div className="swip">
                    <div className="title-wrapper">
                      <span className="title-1">Contact us</span>
                      <span className="title-2">Contact us</span>
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

export default BlogAreaTwo;
