import React from 'react'
import Carts from './Carts';
import img1 from "../assets/pro-hm1-1.webp"; 
import img2 from "../assets/pro-hm1-2.webp"; 
import img3 from "../assets/pro-hm1-3.webp"; 
import img4 from "../assets/pro-hm1-4.webp"; 



const Bestsell = () => {
  return (
    <div className='pt-5'>
        <div className="container">
        <h2 className=' text-center' style={{fontWeight:'bold',color:'darkslategray'}}>Best Sell</h2>

          <p className='bannerP  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Illo cumque consequatur neque incidunt nobis quisquam et optio?</p>
            
        <div className="row ">
             
            <div className="col-md-3"> <Carts img= {img1} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
            <div className="col-md-3"><Carts img= {img2} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$310.00"/></div>
            <div className="col-md-3"><Carts img= {img3} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$450.00"/></div>
            <div className="col-md-3"><Carts img= {img4} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$399.00"/></div>

            </div>
        </div>
    </div>
  )
}

export default Bestsell