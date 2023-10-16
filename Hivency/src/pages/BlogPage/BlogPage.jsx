import React,{useEffect} from "react";
import BlogArea from "../../components/BlogArea/BlogArea";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";
import BreadCrumbArea from "../../components/BreadCrumbArea/BreadCrumbArea";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( <>
    <Preloader/>
    <HeaderTwo/>
    <Overlay/>
    <MenuSidebar/>
    <ScrollToTop/>
    <BreadCrumbArea title={"Our Blog"} subtitle={"Blog"}/>
    <BlogArea/>
   <Footer/>
    </> );
}

export default Blog;