import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Box, Grid, Paper } from "@mui/material";
import { PausePresentationRounded } from "@mui/icons-material";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
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
              Recently Deposit
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              on 15 March, 2019
            </Typography>
            <div>
              <Link color="primary" href="#" onClick={preventDefault}>
                View balance
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
              Recently Deposit
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              on 15 March, 2019
            </Typography>
            <div>
              <Link color="primary" href="#" onClick={preventDefault}>
                View balance
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
              Recently Deposit
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              on 15 March, 2019
            </Typography>
            <div>
              <Link color="primary" href="#" onClick={preventDefault}>
                View balance
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
