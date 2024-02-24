import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Input_Field from "../components/Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth, firebase_app } from "../config/firebase-config/index";
import {set_user_auth} from "../store/slices/user_data_slice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [data, setData] = useState({});
  const user_data = useSelector((a) => a.user_data);

  console.log(user_data);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const change_handle = (e) => {
    const { value, id } = e.target;

    setData({ ...data, [id]: value });
  };

  const submit_handle = async (e) => {
    e.preventDefault();

    try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        dispatch(set_user_auth(true));
        localStorage.setItem("isLoggedIn", true);
        Navigate("/");
        console.log(userCredential.user);
      } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        dispatch(set_user_auth(false));
        alert("invalid credential")
      }
    }


  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center px-3">
      <form
        onSubmit={submit_handle}
        className="bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5"
      >
        <div className="text-primary_color col-span-2 text-center text-3xl font-bold">
          <h1>LOGIN</h1>
        </div>
        <div className="col-span-2">
          <Input_Field
            id="email"
            type="email"
            required={true}
            onChange={change_handle}
            placeholder="Email Address"
          />
        </div>
        <div className="col-span-2">
          <Input_Field
            id="password"
            required={true}
            onChange={change_handle}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="col-span-2">
          <Custom_Button type="submit">Login</Custom_Button>
        </div>

        <div className="col-span-2 space-x-1 text-center">
          <span>Don't have account </span>
          <Link to="/signup" className="underline text-primary_color">
            Signup now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
