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

const Login = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form before submitting
    if (value.trim() === '') {
      alert('Please fill in the required field.');
      return;
    }

    // Submit the form
    console.log('Form submitted with value:', value);
  };
  return (
    <div>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        textAlign={"center"}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}></Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>
      <TextField
      sx={{ my: 1 }}
        label="Name"
        variant="filled"
        required
        fullWidth
        value={value}
        onChange={handleChange}
      />
       <TextField
         sx={{ my: 1 }}
        label="@Email"
        variant="filled"
        required
        fullWidth
        value={value}
        onChange={handleChange}
      />
       <TextField
         sx={{ my: 1 }}
        label="Password"
        variant="filled"
        required
        fullWidth
        value={value}
        onChange={handleChange}
      />
  
      <Button type="submit" fullWidth variant="contained" color="primary">
      <Link className="redirect" to="/home">Login</Link>
      </Button>
    </form>
          <p>
            Don't have an account? <Link  style={{textDecoration : "none"}} to="/">Signup Now</Link>
          </p>{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
      </Grid>
    </div>
  );
};

export default Login;
