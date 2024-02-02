import { Avatar, Box, CardMedia, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from '@mui/material/styles';



import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const Customers = () => {
  return (
    <div>
        <Customers2/>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Customer Data
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper
            elevation={5}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              SMith John
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Last purchasing : Items
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Payment: Delay
            </Typography>
            <div>
              <Link color="primary" href="#">
                View Profile
              </Link>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={5}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Stack>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Brain Paul's
              </Typography>
          
            </Stack>

            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Last purchasing : Items
            </Typography>

            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Payment: Delay
            </Typography>
            <div>
              <Link color="primary" href="#">
                View Profile
              </Link>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={5}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Tom Classy
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Last purchasing : Items
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Payment: Delay
            </Typography>
            <div>
              <Link color="primary" href="#">
                View Profile
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};


export const Customers2 = () => {


  return (
    <div>
        <Typography component="h2" variant="h6" color="primary">Customer Chart</Typography>
          <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          plotType="bar"
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          height={100}
        />
      
      </Box>
   
    </Stack>
    <hr />
     
    </div>
  )
}


export default Customers;
