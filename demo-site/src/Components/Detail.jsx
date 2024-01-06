import React, { useState } from 'react'
import Navbar from './Navbar'
import img1 from "../assets/pro-hm1-1.webp"; 
import  StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import CircleIcon from '@mui/icons-material/Circle';
import { blue, green, pink, yellow } from '@mui/material/colors';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShopButton from './ShopButton';

import Footer from './Footer';
import CopyR from './CopyR';
import MainSection from './MainSection';




const Detail = () => {
  const [back,setBack] = useState(false)
  const Handle_back = () =>{
    setBack(true)
  }

  return (
    <>
    {back ? (<MainSection/>) : ( 
    <div>
      <div className='main_detail'>
        <Navbar/>
      <div className='detail_main'>

        <h1>Product Details Page</h1>
        <span>Home / Product Details</span>

      </div>
    </div>

    <div className="container p-5">
      <div className="row py-5">
        <div className="col-md-6">
          <img src={img1} style={{height : 500}} alt="" />
        </div>
        <div className="col-md-6 px-5">
         <p>Life Style</p>
         <h3>LaaVista Depro, FX 829 v1</h3>
         <span className='py-5'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/> 40+ reviews</span>
         <p className='py-2' style={{fontSize:15 ,fontWeight: "bold"}}>Size : </p>
         <span className='py-5'><CircleIcon sx={{ fontSize: 30 , color: pink[500] }}/>
         <CircleIcon sx={{ fontSize: 30 , color: blue[500] }}/>
         <CircleIcon sx={{ fontSize: 30 , color: yellow[500] }}/>
         <CircleIcon sx={{ fontSize: 30 , color: green[500] }}/></span>
         <p className='' style={{fontSize:15 ,fontWeight: "bold"}}>Colors : </p>
         <span className='m-2'>S</span>
         <span className='m-2'>M</span>
         <span className='m-2'>L</span>
         <span className='m-2'>Xl</span>
       <div>
         <span style={{fontSize:30 ,fontWeight: "bold"}} className='py-3'>$210.00 </span>
   <span className='py-2'> $230.00 </span> <span  class="badge badge-sm bg-secondary">- 30%</span > </div>

   <div className='py-2'> <span className='py-2'><CompareArrowsIcon/> 40+ reviews </span> <span  ><FavoriteBorderIcon/> 40+ reviews </span></div>
<hr />
   <ShopButton className='py-2' label = "Add to Cart"/>
   <div className='py-2' onClick={Handle_back}><ShopButton  label = "Go Back"/></div>

        </div>
      </div>
    </div>
   <Footer/>
  <CopyR/>
  </div> ) }
   
    </>
  )
}

export default Detail
