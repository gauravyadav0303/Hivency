import React from "react";
import ClientSlider from "../ClientSlider/ClientSlider";

function Client() {
    return ( 
        <div className="client-logo-area style-1 style-2">
        <div className="container">
            <div className="client-title">
                <h5>Working with the most trusted technologies</h5>
            </div>
            <ClientSlider/>
        </div>
    </div>
     );
}

export default Client;