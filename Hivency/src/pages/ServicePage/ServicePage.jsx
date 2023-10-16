import React,{useEffect} from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import ServiceCardTwo from "../../components/ServiceCard/ServiceCardTwo";
import ProcessArea from "../../components/ProcessArea/ProcessArea";
import PriceArea from "../../components/PriceArea/PriceArea";
import TestamonialTwo from "../../components/Testamonial/TestamonialTwo";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";
import BreadCrumbArea from "../../components/BreadCrumbArea/BreadCrumbArea";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

function ServicePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( <>
    <Preloader/>
    <HeaderTwo/>
    <Overlay/>
    <MenuSidebar/>
    <ScrollToTop/>
    <BreadCrumbArea title={"Services"} subtitle={"Services"}/>
    <ServiceCardTwo/>
    <ProcessArea/>
    <PriceArea/>
    <TestamonialTwo/>
    <Footer/>
    </> );
}

export default ServicePage;