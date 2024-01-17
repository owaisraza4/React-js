import { Grid } from "@mui/material";
import React from "react";

const Mobiles = () => {
  const images = [
    {
        id : 1,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/a83761ea-b26e-4488-a3e7-2824815adad4.png?format=avif",
    },
    {
        id : 2,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/c85351ec-266b-4fe4-9a12-8a24bc581da2.png?format=avif",
    },
    {
        id : 3,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/e98b0b78-02f7-4c8b-85c0-ea911a4158b0.png?format=avif",
    },
    {
        id : 4,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/65d70626-42c9-47f4-ba24-1a1a22bc976f.png?format=avif",
    },
    {
        id : 5,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/aff7f6ff-bc7e-42e5-b638-069822695628.png?format=avif",
    },
    {
        id : 6,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/bb9496ab-6dd0-4556-a275-115c5024c3e9.png?format=avif",
    },
  ];
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Mobiles</h1>

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

export default Mobiles;
