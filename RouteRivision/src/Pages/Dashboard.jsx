import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";
import Chart from "./Chart";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Customers2 } from "./Customers";

const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 400,
  height: 200,
};


const Dashboard = () => {
  return (
    <>
   <Customers2/>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Chart />
        </Grid>
        <Grid item xs={4} >
          <Paper
            elevation={5}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
              marginBottom:2
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Recently Deposit
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              on 15 March, 2019
            </Typography>
            <div>
              <Link color="primary" href="#" >
                View balance
              </Link>
            </div>
          </Paper>

          <PieChart
         
        
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
       
        },
      }}
      {...size}
    />
        </Grid>
      </Grid>

    
    </>
  );
};

export default Dashboard;
