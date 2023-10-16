import React,{useEffect} from "react";
import Overlay from "../../components/Overlay/Overlay";
import ContactArea from "../../components/ContactArea/ContactArea";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Preloader from "../../components/Preloader/Preloader";
import BreadCrumbArea from "../../components/BreadCrumbArea/BreadCrumbArea";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      <Preloader />
      <HeaderTwo />
      <Overlay />
      <MenuSidebar/>
      <ScrollToTop/>
      <BreadCrumbArea title={"Contact Us"} subtitle={"Contact"}/>
      <ContactArea />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
