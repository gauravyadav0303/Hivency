import React,{useEffect} from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import BreadCrumbArea from "../../components/BreadCrumbArea/BreadCrumbArea";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

function TeamPage() {
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
      <BreadCrumbArea title={"Team-member"} subtitle={"Team-Menber"} />
      <Team />
      <Footer />
    </>
  );
}

export default TeamPage;
