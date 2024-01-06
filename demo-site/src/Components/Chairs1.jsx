import React,{useState} from 'react'
import Carts from './Carts';
import img1 from "../assets/pro-hm1-1.webp"; 
import img2 from "../assets/pro-hm1-2.webp"; 
import img3 from "../assets/pro-hm1-3.webp"; 
import img4 from "../assets/pro-hm1-4.webp"; 
import Detail from './Detail';
import MainSection from './MainSection';



const Chairs1 = () => {

 

  return (
    <div>

                <div className="row " role="button">
                <div className="col-md-3" ><Carts img= {img1} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$210.00"/></div>
                <div className="col-md-3" ><Carts img= {img2} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$310.00"/></div>
                <div className="col-md-3" ><Carts img= {img3} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$450.00"/></div>
                <div className="col-md-3" ><Carts img= {img4} label = "Chair" Desc = "Golden Easy Spot Chair." price = "$399.00"/></div>
                </div>
                 
              
    </div>
  )
}
export default Chairs1
