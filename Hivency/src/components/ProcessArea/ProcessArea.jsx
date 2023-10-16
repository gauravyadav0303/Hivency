import React from "react";

function ProcessArea() {
  return (
    <div className="process-step-area style-1">
      <div className="container">
        <div className="section-title text-center style-2 ">
          <div className="short-title">
            <span>Our work process</span>
          </div>
          <h2 className="title">
            Navigate with <br />
            our clear work{" "}
            <span className="underline1">
              <img src="images/shape/underline.png" alt="underline" /> process
            </span>
          </h2>
        </div>
        <div className="process-step-wrapper">
          <div className="row">
            <div className="sm:w-[50%] md:w-[33.33%]">
              <div className="process-step">
                <div className="icon-wrapper">
                  <div className="numeric">1</div>
                  <div className="icon">
                    <i className="icon-box"></i>
                  </div>
                </div>
                <div className="content">
                  <h2 className="title">
                    <a href="#">Choose a service</a>
                  </h2>
                  <p className="desc">
                    Nemo enim ipsam voluptatem quia voluptas sit asper natur aut
                    oditut fugit Nemo enim ipsam voluptatem .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-[50%] md:w-[33.33%]">
              <div className="process-step">
                <div className="icon-wrapper">
                  <div className="numeric">2</div>
                  <div className="icon">
                    <i className="icon-toffee"></i>
                  </div>
                </div>
                <div className="content">
                  <h2 className="title">
                    <a href="#">Get custom plans</a>
                  </h2>
                  <p className="desc">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed qucui dolorem ipsum{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-[50%] md:w-[33.33%]">
              <div className="process-step">
                <div className="icon-wrapper">
                  <div className="numeric">3</div>
                  <div className="icon">
                    <i className="icon-check-box"></i>
                  </div>
                </div>
                <div className="content">
                  <h2 className="title">
                    <a href="#">Successfully done</a>
                  </h2>
                  <p className="desc">
                    Nemo enim ipsam voluptatem quia voluptas sit asper natur aut
                    oditut fugit Nemo enim ipsam voluptatem{" "}
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

export default ProcessArea;
