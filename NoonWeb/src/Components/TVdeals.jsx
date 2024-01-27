import { Grid } from "@mui/material";
import React from "react";
import Product_Card from "./Product_Card";

const TVdeals = () => {
  const products_arr = [
    {
      id: 31,
      img_url: [
        "https://f.nooncdn.com/p/pnsku/N53398626A/45/_/1704184800/ae264b78-d1fe-4964-b7a3-4549706e7ee5.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1685162023/N53398626A_5.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1685162022/N53398626A_10.jpg?format=avif&width=240",
      ],
      title: "65 Inch Crystal UHD 4K Smart TV 2023",

      rating: 4.4,
      sold: 232,
      dis_price: 1610.0,
      orignal_price: 2999.0,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Home Applience",
    },
    {
      id: 32,
      img_url: [
        "https://f.nooncdn.com/p/v1690369167/N53422649A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1690369167/N53422649A_4.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1690369167/N53422649A_3.jpg?format=avif&width=240",
      ],
      title: "Cinema SB270 2.1 Channel Soundbar With Wireless Subwoofer",
      rating: 4.4,
      sold: 232,
      dis_price: 599.0,
      orignal_price: 899.0,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Home Applience",
    },
    {
      id: 33,
      img_url: [
        "https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424523/e4637035-8cd6-4d56-a859-b5e1017d52ed.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424367/4bf95534-f5d5-43fa-afea-a5d87d166854.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424298/57e8e677-b790-4e08-b0f3-abf97c1405df.jpg?format=avif&width=240",
      ],
      title: "VIDAA U6 4K Smart TV, 70 Inch UHD E6K With Dolby Vision",
      rating: 4.7,
      sold: 232,
      dis_price: 1599.0,
      orignal_price: 3999.0,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Home Applience",
    },
    {
      id: 34,
      img_url: [
        "https://f.nooncdn.com/p/v1684160503/N53403939A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1684160504/N53403939A_4.jpg?format=avif&width=240",

        "https://f.nooncdn.com/p/v1684160503/N53403939A_2.jpg?format=avif&width=240",
      ],
      title: "2.0CH Wireless Soundbar With Night Mode",
      rating: 3.5,
      sold: 232,
      dis_price: 2000,
      orignal_price: 2200,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Home Applience",
    },
    {
      id: 35,
      img_url: [
        "https://f.nooncdn.com/p/v1659335490/N53338272A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1659335490/N53338272A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1659335490/N53338272A_4.jpg?format=avif&width=240",
      ],
      title: "50 Inch UHD 4K Smart Android Led TV ",
      rating: 4.3,
      sold: 232,
      dis_price: 849.0,
      orignal_price: 2599.0,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Home Applience",
    },
    {
      id: 36,
      img_url: [
        "https://f.nooncdn.com/p/v1648716995/N52894685A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1648716996/N52894685A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1648978760/N52894685A_5.jpg?format=avif&width=240",
      ],
      title: "55 Inch 4K UHD LED Smart Android TV",
      rating: 4.2,
      sold: 232,
      dis_price: 1099.0,
      orignal_price: 1200.0,
      description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Home Applience",
    },
  ];
  return (
    <div>
      <div style={{ padding: 20, fontFamily: "sans-serif" }}>
        <h2>Trending deals in TV & accessories</h2>
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
    </div>
  );
};

export default TVdeals;
