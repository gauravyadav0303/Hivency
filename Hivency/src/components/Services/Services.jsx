import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

function Services() {
    return ( 
        <div className="service-area style-1">
        <div className="container">
            <div className="row flex justify-center">
                <div className="sm:w-[66.67%] col-xl-6 md:w-[50%]">
                    <div className="section-title text-center ">
                        <div className="short-title">
                            <span>Our services</span>
                        </div>
                        <h2 className="title">Unleashing the best  <span className="underline1"> <img src="images/shape/underline.png" alt="underline"/> website</span>
                           tailored for you</h2>
                    </div>
                </div>
            </div>
            <ServiceCard/>
        </div>
    </div>
     );
}

export default Services;