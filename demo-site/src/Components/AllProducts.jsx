import React from "react";
import Carts from "./Carts";
import img1 from "../assets/pro-hm1-1.webp"; 

import img2 from "../assets/pro-hm1-2.webp"; 
import img3 from "../assets/pro-hm1-3.webp"; 
import img4 from "../assets/pro-hm1-4.webp"; 
import img5 from "../assets/pro-hm1-5.webp"; 

import img6 from "../assets/pro-hm1-6.webp"; 
import img7 from "../assets/pro-hm1-7.webp"; 
import img8 from "../assets/pro-hm1-8.webp"; 

const AllProducts = () => {
  return (
    <div>
      <div className="container ">
      <h2 className='mt-4 mb-4 text-center' style={{fontWeight:'bold',color:'darkslategray'}}>All Products</h2>

        <p className="bannerP text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text</p>
        <div className="row">
            <div className="col-md-3"> <Carts img= {img1} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
            <div className="col-md-3"> <Carts img= {img2} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
            <div className="col-md-3"> <Carts img= {img3} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
            <div className="col-md-3"> <Carts img= {img4} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
            <div className="col-md-3"> <Carts img= {img5} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
            <div className="col-md-3"> <Carts img= {img6} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
            <div className="col-md-3"> <Carts img= {img7} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
            <div className="col-md-3"> <Carts img= {img8} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
