import { Grid } from "@mui/material";
import React from "react";

const Fragnance = () => {
  const images = [
    {
        id : 1,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/dfc0532f-3892-45b7-adc0-99ee140b0fa0.png?format=avif",
    },
    {
        id : 2,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/bb059d26-3f79-46aa-8745-b0315929a40b.png?format=avif",
    },
    {
        id : 3,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/e9973fdd-4640-4c43-86e3-1093fb66321e.png?format=avif",
    },
    {
        id : 4,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/cea9baaa-aad4-470c-af75-6326884fce06.png?format=avif",
    },
    {
        id : 5,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/f6f4ae6b-1b77-4ed0-88b6-c833fe065706.png?format=avif",
    },
    {
        id : 6,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/f3594d2b-7b28-4ee4-98e5-abd4fb5da989.png?format=avif",
    },
  ];
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Fragrances</h1>

      <Grid container spacing={2}>
        {images.map((current_obj, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2} xl={2}>
            <img height="270" src={current_obj.imgPath} alt={`mobile-${index}`} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
};

export default Fragnance;
