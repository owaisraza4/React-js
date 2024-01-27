import { Grid } from '@mui/material';
import React from 'react'
import Product_Card from './Product_Card';

const Laptop = () => {
    const images = [
        {
          img_url:
            "https://f.nooncdn.com/mpcms/EN0001/assets/70b35d75-79e6-46e7-a2be-fb54280bb5ab.png?format=avif"
        
        },
        {
          img_url:
            "https://f.nooncdn.com/mpcms/EN0001/assets/b6eb1435-d74b-467c-90d9-c754a41b33df.png?format=avif"
        },
        {
          img_url:
            "https://f.nooncdn.com/mpcms/EN0001/assets/95ea730a-c2ee-4308-ab19-7f42656cc1e7.png?format=avif",
        
        },
        {
          img_url:
            "https://f.nooncdn.com/mpcms/EN0001/assets/d1f36ff5-71f8-4f90-a8a6-65d7d1a7c26d.png?format=avif",
         
        },
        {
          img_url:
            "https://f.nooncdn.com/mpcms/EN0001/assets/d88f9099-6363-49ed-b550-20c12a66fa27.png?format=avif",
       
        },
        {
          img_url:
            "https://f.nooncdn.com/mpcms/EN0001/assets/90815439-812e-468e-97a6-883a0b8ab41d.png?format=avif",
       
        },
       
      ];
  return (
    <div>
      <div style={{ padding: 20, fontFamily: "sans-serif" }}>
        <h1>Laptop & Acessories</h1>

        <Grid container spacing={2}>
          {images.map((current_obj, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2} xl={2}>
              <img
                height="270"
                src={current_obj.img_url}
                alt={`mobile-${index}`}
              />
            </Grid>
          ))}
        </Grid>
      </div>
   
    </div>
  )
}

export default Laptop
