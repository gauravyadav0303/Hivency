import React from "react";

function Overlay() {

    $(".body-overlay").on("click", function () {
        $(".menu-sidebar-area").removeClass("active");
        $(".body-overlay").removeClass("active");
    });

    return ( <div className="body-overlay"></div> );
}

export default Overlay;