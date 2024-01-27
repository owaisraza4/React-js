import React from "react";

import { Grid } from "@mui/material";
import Product_Card from "./Product_Card";

const Products = () => {
  const products_arr = [
    {
      id: 25,
      img_url: [
        "https://f.nooncdn.com/p/v1668695010/N47589524A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1668695010/N47589524A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1668695010/N47589524A_4.jpg?format=avif&width=240",
      ],
      title: "Front Load Washing Machine 240.0 W WFPV7012MT Titanium",
      rating: 4.3,
      sold: 232,
      dis_price: 748.0,
      orignal_price: 1000.0,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    },
    {
      id: 26,
      img_url: [
        "https://f.nooncdn.com/p/v1691397637/N53063275A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1691397639/N53063275A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1691397639/N53063275A_3.jpg?format=avif&width=240",
      ],
      title: "Front Load Washing Machine With Lunar Dial, 1000 RPM",
      rating: 3.5,
      sold: 232,
      dis_price: 643.2,
      orignal_price: 800.2,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    },
    {
      id: 27,
      img_url: [
        "https://f.nooncdn.com/p/v1668679670/N25281642A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1668679671/N25281642A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1668679670/N25281642A_4.jpg?format=avif&width=240",
      ],
      title: "Portable Handheld Vacuum Cleaner 400-",
      rating: 4.3,
      sold: 232,
      dis_price: 95.15,
      orignal_price: 110.0,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    },
    {
      id: 28,
      img_url:
        ["https://f.nooncdn.com/p/pnsku/N31867146A/45/_/1701068689/a2c11b8b-8aa9-45a7-8897-2eceb6a7ff35.jpg?format=avif&width=240","https://f.nooncdn.com/p/pnsku/N31867146A/45/_/1701068690/e68bb362-a9fe-4ebd-88ef-743e15700099.jpg?format=avif&width=240","https://f.nooncdn.com/p/pnsku/N31867146A/45/_/1701068690/790348a1-876c-4cc4-95e9-cdeb87435ef6.jpg?format=avif&width=240"],
      title: "Digital Air Fryer With 3.5 L Total Capacity",
      rating: 3.9,
      sold: 232,
      dis_price: 159.00,
      orignal_price: 200.50,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    },
    {
      id: 29,
      img_url:
        ["https://f.nooncdn.com/p/v1652078576/N43431945A_1.jpg?format=avif&width=240","https://f.nooncdn.com/p/v1652078576/N43431945A_2.jpg?format=avif&width=240","https://f.nooncdn.com/p/v1652078576/N43431945A_3.jpg?format=avif&width=240"],
      title: "Sandwich Maker And 5 In 1 Snack Heater -",
      rating: 3.8,
      sold: 232,
      dis_price: 69.00 ,
      orignal_price: 100.50,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    },
    {
      id: 30,
      img_url:
        ["https://f.nooncdn.com/p/pnsku/N53386420A/45/_/1705483237/1b6bcd00-894e-46dd-b588-fd66c1b8a912.jpg?format=avif&width=240","https://f.nooncdn.com/p/pnsku/N44694097A/45/_/1699348672/190a87a7-8341-47b3-8d22-76a8f2de2ecd.jpg?format=avif&width=240 ","https://f.nooncdn.com/p/pnsku/N44694097A/45/_/1699348918/b40064f8-a429-42ea-9967-e0d71117cdc3.jpg?format=avif&width=240"],
      title: "130L Gross - 90L Net Capacity Single Door",
      rating: 4.1,
      sold: 232,
      dis_price: 369.00 ,
      orignal_price: 400.54,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    },
  ];
  return (
    <>
      <div style={{ padding: 20, fontFamily: "sans-serif" }}>
        <h2>Bestsellers in home appliances</h2>
        <Grid container>
          {products_arr.map((current_obj, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={2} xl={2}>
                <Product_Card card_data={current_obj} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Products;
