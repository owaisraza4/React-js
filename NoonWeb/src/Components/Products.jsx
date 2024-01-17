import React from 'react'

import { Grid } from "@mui/material";
import Product_Card from './Product_Card';

const Products = () => {
    const products_arr = [
        {
          img_url:
            "https://f.nooncdn.com/p/v1668679670/N25281642A_2.jpg?format=avif&width=240",
          title: "Portable Handheld Vacuum Cleaner 400-",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/v1691397637/N53063275A_1.jpg?format=avif&width=240",
          title: "Portable Handheld Vacuum Cleaner 400-",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/pnsku/N31867146A/45/_/1701068689/a2c11b8b-8aa9-45a7-8897-2eceb6a7ff35.jpg?format=avif&width=240",
          title: "Portable Handheld Vacuum Cleaner 400-",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/v1668695010/N47589524A_1.jpg?format=avif&width=240",
          title: "Portable Handheld Vacuum Cleaner 400-",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/v1652078576/N43431945A_1.jpg?format=avif&width=240",
          title: "Portable Handheld Vacuum Cleaner 400-",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/pnsku/N53386420A/45/_/1705483237/1b6bcd00-894e-46dd-b588-fd66c1b8a912.jpg?format=avif&width=240",
          title: "Portable Handheld Vacuum Cleaner 400-",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
       
      ];
  return (
    < >
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
    <h2 >Bestsellers in home appliances</h2>
    <Grid container>
      {products_arr.map((current_obj, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4} lg={2} xl={2}>
            <Product_Card
              card_data={current_obj}
            />
          </Grid>
        );
      })}
    </Grid>
    </div>
  </>
  )
}

export default Products
