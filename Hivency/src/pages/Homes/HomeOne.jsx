import React,{useEffect} from "react";
import Header from "../../components/Header/Header";
import Overlay from "../../components/Overlay/Overlay";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import SupportBanner from "../../components/SupportBanner/SupportBanner";
import AboutUs from "../../components/AboutUs/AboutUs";
import PortfolioSlider from "../../components/PortfolioSlider/PortfolioSlider";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Blog from "../../components/Blog/Blog";
import Faq from "../../components/Faq/Faq";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";
import Testamonial from "../../components/Testamonial/Testamonial";
import Preloader from "../../components/Preloader/Preloader";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";



function HomeOne() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Preloader/>
      <Header />
      <Overlay />
      <MenuSidebar/>
      <ScrollToTop/>
      <Hero />
      <Services />
      <SupportBanner />
      <AboutUs />
      <PortfolioSlider/>
      <Testamonial/>
      <ChooseUs />
      <Blog />
      <Faq/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default HomeOne;
