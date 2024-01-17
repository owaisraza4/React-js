// import { Laptop } from "@mui/icons-material";
import * as React from "react";


import './App.css'
import Banner1 from "./Components/Banner1";
import BeautySection from "./Components/BeautySection";
import Electronuc from "./Components/Electronuc";
import Footer from "./Components/Footer";
import Fragnance from "./Components/Fragnance";
import Glasses from "./Components/Glasses";
import Laptop from "./Components/Laptop";
import Mobiles from "./Components/Mobiles";
import Navbar2 from "./Components/Navbar2";
import Products from "./Components/Products";
import RecommandedP from "./Components/RecommandedP";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import TVdeals from "./Components/TVdeals";


function App() {

  return (
    <>  
   
   <Navbar2/>
   <ResponsiveAppBar/>
    <Banner1/>
    <RecommandedP/>
    <Electronuc/>
    <Mobiles/>
    <BeautySection/>
    <Laptop/>
    <Fragnance/>
   
    <Glasses/>
    <Products/>
    <TVdeals/>
    <Footer/>
  
 
    </>
  )
}

export default App
