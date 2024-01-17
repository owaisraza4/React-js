import { Grid } from '@mui/material';
import React from 'react'
import Product_Card from './Product_Card';

const TVdeals = () => {
    const products_arr = [
        {
          img_url:
            "https://f.nooncdn.com/p/v1659335490/N53338272A_1.jpg?format=avif&width=240",
          title: "50 Inch UHD 4K Smart Android Led TV ",

          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/pnsku/N53398633A/45/_/1704184673/7060c16d-bcd3-4275-9431-3fef8b1a5a01.jpg?format=avif&width=240",
          title: "50 Inch UHD 4K Smart Android Led TV ",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424523/e4637035-8cd6-4d56-a859-b5e1017d52ed.jpg?format=avif&width=240",
          title: "50 Inch UHD 4K Smart Android Led TV ",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/v1665392506/N53356366A_1.jpg?format=avif&width=240",
          title: "50 Inch UHD 4K Smart Android Led TV ",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/v1671548521/N19200514A_1.jpg?format=avif&width=240",
          title: "50 Inch UHD 4K Smart Android Led TV ",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
            img_url:
              "https://f.nooncdn.com/p/v1690369167/N53422649A_1.jpg?format=avif&width=240",
            title: "50 Inch UHD 4K Smart Android Led TV ",
            rating: 4,
            sold: 232,
            dis_price: 2000,
            orignal_price: 2200,
          },
    
      ];
  return (
    <div>
          <div style={{ padding: 20, fontFamily: "sans-serif" }}>
    <h2 >Trending deals in TV & accessories</h2>
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
   
    </div>
  )
}

export default TVdeals
