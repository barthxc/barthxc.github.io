import CvNav from "../cvcomponents/CvNav/CvNav";
import Section1 from '../cvcomponents/Section1/Section1';
import Section2 from "../cvcomponents/Section2/Section2";
import Section3 from "../cvcomponents/Section3/Section3";
import Section4 from "../cvcomponents/Section4/Section4";
import CvFooter from "../cvcomponents/CvFooter/CvFooter";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



const Cv = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/cv') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
    <CvNav />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <CvFooter />
    </>
  )
}

export default Cv