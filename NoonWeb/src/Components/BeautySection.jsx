import { Grid } from "@mui/material";
import React from "react";

const BeautySection = () => {
  const images = [
    {
        id : 1,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/badc16cb-d3ca-4048-b37b-1f0a0a298f49.png?format=avif",
    },
    {
        id : 2,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/684e81b9-146d-4254-8690-de19d201b146.png?format=avif",
    },
    {
        id : 3,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/9d3b277e-4b5f-4827-b660-683ab9757cb1.png?format=avif",
    },
    {
        id : 4,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/6bb7544c-e4c7-4ca0-ab31-a7ce036ce282.png?format=avif",
    },
    {
        id : 5,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/a7701440-f634-4d6c-85dc-87d20aca0d1a.png?format=avif",
    },
    {
        id : 6,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/d6c40ef7-4718-48f1-bdc3-679f3731517e.png?format=avif",
    },
  ];
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Beauty</h1>

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

export default BeautySection;
