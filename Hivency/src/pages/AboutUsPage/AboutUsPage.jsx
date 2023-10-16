import React,{useEffect} from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import AboutUsTwo from "../../components/AboutUs/AboutUsTwo";
import CounterOne from "../../components/Counter/CounterOne";
import ChooseUsTwo from "../../components/ChooseUs/ChooseUsTwo";
import Team from "../../components/Team/Team";
import TestamonialTwo from "../../components/Testamonial/TestamonialTwo";
import Footer from "../../components/Footer/Footer";
import OfficeArea from "../../components/OfficeArea/OfficeArea";
import Preloader from "../../components/Preloader/Preloader";
import BreadCrumbArea from "../../components/BreadCrumbArea/BreadCrumbArea";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";


function AboutUsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( <>
    <Preloader/>
    <HeaderTwo/>
    <Overlay/>
    <MenuSidebar/>
    <ScrollToTop/>
    <BreadCrumbArea title={"About Us"} subtitle={"About"}/>
    <AboutUsTwo/>
    <CounterOne/>
    <ChooseUsTwo/>
    <Team/>
    <TestamonialTwo/>
    <OfficeArea/>
    <Footer/>
    </> );
}

export default AboutUsPage;