import React,{useEffect} from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import BlogAreaTwo from "../../components/BlogArea/BlogAreaTwo";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";
import BreadCrumbArea from "../../components/BreadCrumbArea/BreadCrumbArea";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

function BlogPageTwo() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( <>
    <Preloader/>
    <HeaderTwo/>
    <Overlay/>
    <MenuSidebar/>
    <ScrollToTop/>
    <BreadCrumbArea title={"Our Blog"} subtitle={"Blog-Details"}/>
    <BlogAreaTwo/>
    <Footer/>
    
    </> );
}

export default BlogPageTwo;