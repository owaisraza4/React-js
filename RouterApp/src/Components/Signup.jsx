import {
    Button,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
  } from "@mui/material";
  import React, { useState } from "react";
  import TextField from "@mui/material/TextField";
  import { LoginSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Signup = () => {
 
  return (
    <div>
              <Grid  container textAlign={"center"}>
        <Grid item xs={12} sm={8} md={6} lg={4}></Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <h1>Signup</h1>
          <form >
      <TextField
      sx={{ my: 1 }}
        label="Name"
        variant="filled"
        required
        fullWidth
     
      />
       <TextField
         sx={{ my: 1 }}
        label="@Email"
        variant="filled"
        required
        fullWidth
     
      />
       <TextField
         sx={{ my: 1 }}
        label="Password"
        variant="filled"
        required
        fullWidth
       
      />
   <TextField
         sx={{ my: 1 }}
        label="Confirm Password"
        variant="filled"
        required
        fullWidth
     
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
      <Link className="redirect" to="/login">Signup</Link>
      </Button>
    </form>
          <p>Already have an account? <Link style={{textDecoration : "none"}} to="/login">Login</Link></p>{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
      </Grid>
    </div>
  )
}

export default Signup