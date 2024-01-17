import { Grid, Stack } from "@mui/material";
import React from "react";
import Slides from "./Slides";

const Banner1 = () => {
  return (
    <div style={{padding: 0,margin: 0}}>
      <Grid container style={{padding: 0,margin: 0}}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Stack>
            <Slides />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <img
              style={{height: 190}}
                src="https://f.nooncdn.com/mpcms/EN0001/assets/9fa77bc4-04be-47ec-a433-42126343092c.png?format=avif"
                alt=""
              />
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <img
              style={{height: 190}}
                src="https://f.nooncdn.com/mpcms/EN0001/assets/aeca53b5-4d64-4733-a911-0143b32ce237.png?format=avif"
                alt=""
              />
           
         
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner1;
