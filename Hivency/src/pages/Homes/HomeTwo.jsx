import React,{useEffect} from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import HeroTwo from "../../components/Hero/HeroTwo";
import Client from "../../components/Client/Client";
import ServicesTwo from "../../components/Services/ServicesTwo";
import AboutUsTwo from "../../components/AboutUs/AboutUsTwo";
import CounterOne from "../../components/Counter/CounterOne";
import PortfolioTwo from "../../components/PortfolioSlider/PortfolioTwo";
import TestamonialTwo from "../../components/Testamonial/TestamonialTwo";
import ChooseUsTwo from "../../components/ChooseUs/ChooseUsTwo";
import Team from "../../components/Team/Team";
import FaqTwo from "../../components/Faq/FaqTwo";
import BlogTwo from "../../components/Blog/BlogTwo";
import FooterTwo from "../../components/Footer/FooterTwo";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Preloader from "../../components/Preloader/Preloader";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

function HomeTwo() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( <>
    <Preloader/>
   <HeaderTwo/>
   <Overlay/>
   <MenuSidebar/>
   <ScrollToTop/>
   <HeroTwo/>
   <Client/>
   <ServicesTwo/>
   <AboutUsTwo/>
   <CounterOne/>
   <PortfolioTwo/>
   <TestamonialTwo/>
   <ChooseUsTwo/>
   <Team/>
   <FaqTwo/>
   <BlogTwo/>
   <FooterTwo/>
    </> );
}

export default HomeTwo;