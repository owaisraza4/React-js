import React from "react";
import Logo from "./Logo";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TextField from '@mui/material/TextField';
import Searchicon from "./Searchicon";

const Footer = () => {
  return (
    <div id="FooterSection">
      <div id="FooterSection" className="container p-5">
        <div className="row">
          <div className="col-md-3">
            <Logo />
            <p className="bannerP" style={{paddingTop: 20,fontSize:16}}>Follow Us :</p>
            <div className="logos p-2">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
            </div>
          </div>
          <div className="col-md-3">
            <ul>     
            <p>USEFULL LINKS</p>
            <li className="mt-2"><a href="">Shopping Cart</a></li>
            <li className="mt-2"><a href="">Wishlist</a></li>
            <li className="mt-2"><a href="">Check Out</a></li>
            <li className="mt-2"><a href="">Support</a></li>
            </ul>
          </div>
          <div className="col-md-3">
          <ul>     
            <p>ABOUT US</p>
            <li className="mt-2"><a href="">About</a></li>
            <li className="mt-2"><a href="">Products</a></li>
            <li className="mt-2"><a href="">Terms and conditions</a></li>
            <li className="mt-2"><a href="">Help Center</a></li>
            </ul>
          </div>


          <div className="col-md-3">
          <ul>     
            <p>NEWS LETTER</p>
     <li className="mt-2">Subscribe to get all new updates</li>
    <div className="mt-2"><TextField label="Enter Your Email" variant="standard"></TextField></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
