import React from "react";

function BreadCrumbArea({ title, subtitle }) {
    return ( 

        <div className="page-breadcrumb-area page-bg">
        <div className="shape">
            <img src="images/shape/part-of-round.png" alt="breadcrumb"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-wrapper">
                <div className="page-heading">
                  <h2 className="page-title">{title}</h2>
                </div>
                <div className="breadcrumb-list">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li className="active"><a href="#">{subtitle}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     );
}

export default BreadCrumbArea;