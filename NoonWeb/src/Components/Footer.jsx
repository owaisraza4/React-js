import { Grid } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="MianFooter">
      <Grid container textAlign="center">
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <span>ELECTRONICS</span>
          <p>Mobile</p>
          <p>Best Mobile Phones</p>
          <p>Laptops</p>
          <p>Mobile</p>
          <p>Home Appliances</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <span>FASHION</span>
          <p> Girls' Fashion</p>
          <p>Boys' Fashion</p>
          <p>Watches</p>
          <p>Jewellery</p>
          <p>Men's Eyewear</p>
          Women's Handbags
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <span>HOME AND KITCHEN</span>
          <p>Tools & Home Improvement</p>
          <p>Kitchen & Dining</p>
          <p>Mobile</p>
          <p>Patio, Lawn & Garden</p>
          <p>Pet Supplies</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <span>BEAUTY</span>
          <p>Fragrance</p>
          <p>Make-Up</p>
          <p>Haircare</p>
          <p>Skincare</p>
          <p>Bath & Body</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <span >BABY & TOYS</span>
          <p> Nursing & Feeding</p>
          <p>Board Games & Cards</p>
          <p>Baby & Kids Fashion</p>
          <p>Baby & Toddler Toys</p>
          <p>Tricycles & Scooters</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <span>TOP BRANDS</span>
          <p>Outdoor Play</p>
          <p>Pampers</p>
          <p>Apple</p>
          <p>Mobile</p>
          <p>Nike</p>
        </Grid>
      </Grid>
<div textAlign="center" style={{padding:40}}>
      <h2>Contact Us</h2>
<FacebookRoundedIcon sx={{ fontSize: 60, padding:2 }}/>
<TwitterIcon sx={{ fontSize: 60 , padding:2 }}/>
<InstagramIcon sx={{ fontSize: 60 , padding:2 }}/>
<LinkedInIcon sx={{ fontSize: 60 , padding:2}}/>
    
      </div>
    </div>
  );
};

export default Footer;
