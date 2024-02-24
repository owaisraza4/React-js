import { Avatar, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";
import { set_user_auth } from "../store/slices/user_data_slice";
import { Custom_Button } from "./Custom_Button";




const Navbar_Component = () => {
  const user_data = useSelector((store) => store.user_data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout_handle = () => {
    signOut(auth).then((res) => {
      dispatch(set_user_auth(false));
      localStorage.clear();
      navigate("/login");
      console.log("logout ho gya...!");
    });
  };

  return (
    <div className="  bg-sky-600 h-20 px-3 flex ">
          <div className="container flex mx-auto items-center justify-between">
      <div className="text-3xl text-white font-bold">Shopping Site</div>

    
     
          <div>
            {user_data.isLoggedIn ? (
              <div className="space-x-3 text-white font-medium flex items-center justify-between">
            <Typography>username</Typography>
      
      <Avatar src="" variant="dot" />
                <Custom_Button color onClick={logout_handle}>
                  Logout
                </Custom_Button>
              </div>
            ) : (
              <div className="space-x-3 text-white font-medium">
                <Link to="/login">Login</Link>
                <span>|</span>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </div>
      
      </div>
    </div>
  );
};

export { Navbar_Component };
