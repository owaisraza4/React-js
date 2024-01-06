import React from "react";
import img5 from "../assets/pro-hm1-5.webp";

import img6 from "../assets/pro-hm1-6.webp";
import img7 from "../assets/pro-hm1-7.webp";
import img8 from "../assets/pro-hm1-8.webp";
import Carts from "./Carts";

const Chair2 = () => {
  const Handle_change = () =>{
    console.log("Ok")
  }
  return (
    <div className="row " role="button">
      <div className="col-md-3" onClick={Handle_change}>
      
        <Carts
          img={img5}
          label="Chair"
          Desc="Golden Easy Spot Chair."
          price="$210.00"
        />
      </div>
      <div className="col-md-3">
        {" "}
        <Carts
          img={img6}
          label="Chair"
          Desc="Golden Easy Spot Chair."
          price="$210.00"
        />
      </div>
      <div className="col-md-3">
        {" "}
        <Carts
          img={img7}
          label="Chair"
          Desc="Golden Easy Spot Chair."
          price="$210.00"
        />
      </div>
      <div className="col-md-3">
        {" "}
        <Carts
          img={img8}
          label="Chair"
          Desc="Golden Easy Spot Chair."
          price="$210.00"
        />
      </div>
    </div>
  );
};

export default Chair2;
