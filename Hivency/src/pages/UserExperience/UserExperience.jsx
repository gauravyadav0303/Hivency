import React,{useEffect} from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Preloader from "../../components/Preloader/Preloader";
import BreadCrumbArea from "../../components/BreadCrumbArea/BreadCrumbArea";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

function UserExperience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Preloader/>
      <HeaderTwo />
      <Overlay />
      <MenuSidebar/>
      <ScrollToTop/>
      <BreadCrumbArea title={"Services"} subtitle={"Service Details"}/>
      <ServiceDetail />
      <Faq/>
      <Services/>
      <Footer/>
    </>
  );
}

export default UserExperience;
