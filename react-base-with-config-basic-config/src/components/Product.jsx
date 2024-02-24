import React, { useEffect, useState } from "react";

import axios from "axios";
import ActionAreaCard from "./CardDetail";
import { Navbar_Component } from "./Navbar_Component";

const Product = () => {
  const [products, setproducts] = useState([]);

  const ApiData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setproducts(res.data);
    });
  };
  useEffect(() => {
    ApiData();
  }, []);

  return (
<>

    <div style={{display:"flex",flexWrap:"wrap"}}>
      {products.map((e, i) => {
        return (
          <ActionAreaCard
            key={i}
            id={e.id}
            title={e.title}
            category={e.category}
            desc={e.description}
            image={e.image}
            price={e.price}
            rating={e.rating.rate}
          />
        );
      })}

    
    </div>
    </>
  );
};

export default Product;
