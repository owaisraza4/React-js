import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Title } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];

const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function Chart() {
  return (
    <>
    <Paper
      elevation={5}
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Today Chart
      </Typography>
      <BarChart
       
        height={300}
        series={[
          {
            data: pData,
            label: "pv",
          },
          {
            data: uData,
            label: "uv",
          },
        ]}
        xAxis={[
          {
            data: xLabels,
            scaleType: "band",
          },
        ]}
        yAxis={[{ max: 10000 }]}
      />
      </Paper>
    </>
  );
}
