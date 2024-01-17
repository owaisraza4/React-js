import { Grid } from '@mui/material';
import React from 'react'
import Product_Card from './Product_Card';

const RecommandedP = () => {
    const products_arr = [
        {
          img_url:
            "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
          title: "iPhone 14 Pro Max 256GB Deep Purple 5G",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240",
          title: "iPhone 14 Pro Max 256GB Deep Purple 5G",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240",
          title: "iPhone 14 Pro Max 256GB Deep Purple 5G",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240",
          title: "iPhone 14 Pro Max 256GB Deep Purple 5G",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
          img_url:
            "https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240",
          title: "iPhone 14 Pro Max 256GB Deep Purple 5G",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
        },
        {
            img_url:
              "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
            title: "iPhone 14 Pro Max 256GB Deep Purple 5G",
            rating: 4,
            sold: 232,
            dis_price: 2000,
            orignal_price: 2200,
          },
    
      ];
  return (
    <div>
         <div style={{ padding: 20, fontFamily: "sans-serif" }}>
    <h2 >Recommanded for you</h2>
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
    <Grid container>
    <Grid item xs = {12} sm = {12} md = {12} lg = {12}>
    <img style={{width : '99vw'}} src="https://f.nooncdn.com/ads/banner-1440x1440/en_dk_uae-pca-01.1705394595.0481217.png?format=avif" alt="" />
      </Grid>
    </Grid>
    </div>
  )
}

export default RecommandedP