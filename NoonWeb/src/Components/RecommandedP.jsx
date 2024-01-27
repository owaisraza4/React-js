import { Grid } from '@mui/material';
import React from 'react'
import Product_Card from './Product_Card';

const RecommandedP = () => {
    const products_arr = [
        {
          id: 19,
          img_url:
           [ "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
           "https://f.nooncdn.com/p/v1662640953/N53346840A_2.jpg?format=avif&width=240",
           "https://f.nooncdn.com/p/v1662640954/N53346840A_3.jpg?format=avif&width=240"],
          title: "iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version",
          rating: 4.6,
          sold: 232,
          dis_price: 4777.00,
          orignal_price: 5099.00,
          description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        },
        {
          id: 20,
          img_url:
            ["https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240",
          "https://f.nooncdn.com/p/v1669724769/N40633047A_7.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1654846188/N40633047A_8.jpg?format=avif&width=240"],
          title: "PlayStation 5 Console (Disc Version) With Controller",
          rating: 4.5,
          sold: 232,
          dis_price: 1820.00,
          orignal_price: 3999.00,
          description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        },
        {
          id: 21,
          img_url:
            ["https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240",
          "https://f.nooncdn.com/p/v1663322644/N43241184A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1663322645/N43241184A_5.jpg?format=avif&width=240"],
          title: "Bluetooth Full Touch Call Smartwatch With Replaceable Strap Black",
          rating: 3.5,
          sold: 232,
          dis_price: 16.50,
          orignal_price: 17.50,
          description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        },
        {
          id: 22,
          img_url:
            ["https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240","https://f.nooncdn.com/p/v1680512168/N46554630A_3.jpg?format=avif&width=240","https://f.nooncdn.com/p/v1680512168/N46554630A_4.jpg?format=avif&width=240"],
          title: "Unlimited Double Touch Liquid Lip Colour 103 Natural Rose",
          rating: 3.6,
          sold: 232,
          dis_price: 69.00,
          orignal_price: 72.00,
          description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        },
        {
          id: 23,
          img_url:
            ["https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240","https://f.nooncdn.com/p/v1667829014/N41247610A_3.jpg?format=avif&width=240","https://f.nooncdn.com/p/v1667829014/N41247610A_4.jpg?format=avif&width=240"],
          title: "iPhone 11 White 128GB 4G LTE (2020 - Slim Packing) -",
          rating: 4,
          sold: 232,
          dis_price: 2000,
          orignal_price: 2200,
          description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        },
        {
          id: 24,
          img_url:
           [ "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
           "https://f.nooncdn.com/p/v1662640953/N53346840A_2.jpg?format=avif&width=240",
           "https://f.nooncdn.com/p/v1662640954/N53346840A_3.jpg?format=avif&width=240"],
          title: "iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version",
          rating: 4.6,
          sold: 232,
          dis_price: 4777.00,
          orignal_price: 5099.00,
          description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
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