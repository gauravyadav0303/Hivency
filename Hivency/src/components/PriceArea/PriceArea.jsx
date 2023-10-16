import React from "react";

function PriceArea() {
  return (
    <div className="pricing-area style-1">
      <div className="container">
        <div className="section-title text-center style-2">
          <div className="short-title">
            <span>Pricing plan</span>
          </div>
          <h2 className="title">
            Clear and easy <br />
            <span className="underline1">
              <img src="images/shape/underline.png" alt="underline" /> pricing
            </span>{" "}
            simplified for you
          </h2>
        </div>
        <div className="row g-6">
          <div className="sm:w-[50%] md:w-[33.33%]">
            <div className="price-card-wrapper">
              <div className="bg-shape"></div>
              <div className="price-card">
                <div className="shape">
                  <img src="images/shape/wave-white.png" alt="" />
                </div>
                <div className="card-title">
                  <p className="sub-title">Pro</p>
                  <div className="price">
                    <h3 className="price-heading">
                      $245<span className="duration">/month</span>
                    </h3>
                  </div>
                  <div className="divider"></div>
                </div>
                <div className="list-item-wrapper style-2">
                  <ul>
                    <li>API Integrations</li>
                    <li>All analytics pages</li>
                    <li>up to 15 team members</li>
                    <li>Up to 426K tracked events</li>
                  </ul>
                </div>
                <div className="price-btn">
                  <a href="#" className="theme-btn">
                    <div className="swip">
                      <div className="title-wrapper">
                        <span className="title-1">Get started</span>
                        <span className="title-2">Get started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] md:w-[33.33%]">
            <div className="price-card-wrapper active">
              <div className="bg-shape"></div>
              <div className="price-card">
                <div className="shape">
                  <img src="images/shape/wave-white.png" alt="" />
                </div>
                <div className="card-title">
                  <p className="sub-title">Advance</p>
                  <div className="price">
                    <h3 className="price-heading">
                      $345<span className="duration">/month</span>
                    </h3>
                  </div>
                  <div className="divider"></div>
                </div>
                <div className="list-item-wrapper style-2">
                  <ul>
                    <li>API Integrations</li>
                    <li>All analytics pages</li>
                    <li>up to 15 team members</li>
                    <li>Up to 426K tracked events</li>
                  </ul>
                </div>
                <div className="price-btn">
                  <a href="#" className="theme-btn">
                    <div className="swip">
                      <div className="title-wrapper">
                        <span className="title-1">Get started</span>
                        <span className="title-2">Get started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] md:w-[33.33%]">
            <div className="price-card-wrapper">
              <div className="bg-shape"></div>
              <div className="price-card">
                <div className="shape">
                  <img src="images/shape/wave-white.png" alt="" />
                </div>
                <div className="card-title">
                  <p className="sub-title">Popular</p>
                  <div className="price">
                    <h3 className="price-heading">
                      $445<span className="duration">/month</span>
                    </h3>
                  </div>
                  <div className="divider"></div>
                </div>
                <div className="list-item-wrapper style-2">
                  <ul>
                    <li>API Integrations</li>
                    <li>All analytics pages</li>
                    <li>up to 15 team members</li>
                    <li>Up to 426K tracked events</li>
                  </ul>
                </div>
                <div className="price-btn">
                  <a href="#" className="theme-btn">
                    <div className="swip">
                      <div className="title-wrapper">
                        <span className="title-1">Get started</span>
                        <span className="title-2">Get started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceArea;
