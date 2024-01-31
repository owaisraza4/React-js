import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImputComponent from "../Components/ImputComponent";
import Credentials from "../utils/Credentials";

const Login = () => {
  const navigate = useNavigate();
  const [Userdata, setUserdata] = useState({});
  const onChangeHandle = (e) => {
    const { id, value } = e.target;
    setUserdata({ ...Userdata, [id]: value });

    console.log(Userdata);
  };

  const SubmitHandle = (e) => {
    e.preventDefault();
    const {username,password} = Userdata
    if (username === Credentials.username && password === Credentials.password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard");
   
    } else {
      alert("IInvalid Credentials");
    }
  };
  return (
    <div className="container text-center">
      <div className="row">
        <h1 className="display-5">Login Form</h1>
        <hr />
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form  onSubmit={SubmitHandle}>
            <ImputComponent
              placeholder="Enter Email"
              type="text"
              id="username"
              onChange={onChangeHandle}
              required={true}
            />
            <ImputComponent
              sx={{ width: "100%" }}
              placeholder="Enter Password"
              type="password"
              id="password"
              onChange={onChangeHandle}
              required={true}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "100%", mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;
