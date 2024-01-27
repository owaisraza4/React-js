import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Electronuc = () => {
  return (
    <div style={{padding: 20 , fontFamily:'sans-serif'}}>
        <h1 style={{ fontFamily:'sans-serif'}}>Electronics</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
      
              <img
                component="img"
                height="270"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/0748766b-b47c-4707-bafa-fbec33bba2c9.png?format=avif"
                alt="green iguana"
              />
              
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
      
              <img
                component="img"
                height="270"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/9adc6f6b-ae63-4ff2-91b0-c09571549a2d.png?format=avif"
                alt="green iguana"
              />
              
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
      
              <img
                component="img"
                height="270"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/d62f8f99-943f-4e51-93ae-945aae006e99.png?format=avif"
                alt="green iguana"
              />
              
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
      
              <img
                component="img"
                height="270"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/4efb1110-7304-4e98-9559-0b8a6a1d9c7f.png?format=avif"
                alt="green iguana"
              />
              
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
      
              <img
                component="img"
                height="270"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/ac1ab48f-4016-49d3-8ec6-4e72c9ce91df.png?format=avif"
                alt="green iguana"
              />
              
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
      
              <img
             
                height="270"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/e9ad118f-0a0c-40ab-a266-9c13c2c92d3c.png?format=avif"
               
              />
              
        </Grid>
      </Grid>
    </div>
  );
};

export default Electronuc;
