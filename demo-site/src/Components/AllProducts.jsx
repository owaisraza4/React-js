import React from "react";

import Chair2 from "./Chair2";


import Chairs1 from "./Chairs1";

const AllProducts = () => {
  return (
    <div>
      <div className="container ">
      <h2 className='mt-4 mb-4 text-center' style={{fontWeight:'bold',color:'darkslategray'}}>All Products</h2>

        <p className="bannerP text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text</p>
        <div className="row">
        <Chairs1/>
        <Chair2/>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
