import React, { useEffect } from "react";

function ScrollToTop() {

useEffect(() => {

  $(function () {
    $("#scrollTop").hide();
    var position = $(window).scrollTop();
    var timer;
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        clearTimeout(timer);
        if (scrollTop > 100) {
            if (scrollTop > position) {
                $('#scrollTop').fadeOut();
            } else {
                $('#scrollTop').fadeIn();
                timer = window.setTimeout(function() {
                    $("#scrollTop").fadeOut();
                }, 3000);
            }
            position = scrollTop;
        } else {
            $('#scrollTop').fadeOut();
        }
    });
    $(".scrollup-btn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

},[]);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return ( 
        <div id="scrollTop" className="scrollup-wrapper" onClick={scrollToTop}>
        <div className="scrollup-btn">
            <i className="fa-regular fa-angle-up"></i>
        </div>
    </div>
     );
}

export default ScrollToTop;