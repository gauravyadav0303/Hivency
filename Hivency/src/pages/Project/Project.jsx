import React,{useEffect} from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import ProjectArea from "../../components/ProjectArea/ProjectArea";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";
import BreadCrumbArea from "../../components/BreadCrumbArea/BreadCrumbArea";
import Overlay from "../../components/Overlay/Overlay";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

function Project() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( 

<>
<Preloader/>
<HeaderTwo/>
<Overlay/>
<MenuSidebar/>
<ScrollToTop/>
<BreadCrumbArea title={"Our Project"} subtitle={"Project"}/>
<ProjectArea/>
<Faq/>
<Footer/>
</>

     );
}

export default Project;