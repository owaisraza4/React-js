import { Grid } from "@mui/material";
import React from "react";

const Glasses = () => {
  const images = [
    {
      id: 1,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/1ae4dec7-87af-4918-9835-001d2847903c.png?format=avif",
    },
    {
      id: 2,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/0bee3db9-64cd-4f94-aae8-f2455702c80f.png?format=avif",
    },
    {
      id: 3,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/4c98487d-b22a-4050-92b8-f9a4db081b4e.png?format=avif",
    },
    {
      id: 4,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/4c98487d-b22a-4050-92b8-f9a4db081b4e.png?format=avif",
    },
    {
      id: 5,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/d4c01b9e-a6ef-4ccd-ac39-b22e74b2b92b.png?format=avif",
    },
    {
      id: 6,
      imgPath:
        "https://f.nooncdn.com/mpcms/EN0001/assets/d4c01b9e-a6ef-4ccd-ac39-b22e74b2b92b.png?format=avif",
    },
  ];
  return (
    <>
      <div style={{ padding: 20, fontFamily: "sans-serif" }}>
        <h1>Eyewear</h1>

        <Grid container spacing={2}>
          {images.map((current_obj, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2} xl={2}>
              <img
                height="270"
                src={current_obj.imgPath}
                alt={`mobile-${index}`}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img
            style={{ width: "99vw" }}
            src="https://f.nooncdn.com/mpcms/EN0001/assets/2600313f-1710-4c01-a1d3-cdc98ff69589.jpg?format=avif"
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Glasses;
