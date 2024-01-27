import React from "react";
import Navbar2 from "../Components/Navbar2";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import Banner1 from "../Components/Banner1";
import RecommandedP from "../Components/RecommandedP";
import TrendindDeals from "../Components/TrendindDeals";
import Products from "../Components/Products";
import TVdeals from "../Components/TVdeals";
import Electronuc from "../Components/Electronuc";
import Mobiles from "../Components/Mobiles";
import BeautySection from "../Components/BeautySection";
import Laptop from "../Components/Laptop";
import Fragnance from "../Components/Fragnance";
import Glasses from "../Components/Glasses";
import Footer from "../Components/Footer";

const MianComponent = () => {
  return (
    <div>
      <Navbar2 />
      <ResponsiveAppBar />
      <Banner1 />
      <RecommandedP />
      <TrendindDeals />
      <Products />
      <TVdeals />
      <Electronuc />
      <Mobiles />
      <BeautySection />
      <Laptop />
      <Fragnance />

      <Glasses />

      <Footer />
    </div>
  );
};

export default MianComponent;
