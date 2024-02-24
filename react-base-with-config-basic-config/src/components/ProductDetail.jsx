import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { Grid, Typography } from '@mui/material';
import { FaStar } from "react-icons/fa";
import { Navbar_Component } from './Navbar_Component';
import Footer from '../pages/Footer';


const ProductDetail = () => {
    const [products, setproducts] = useState("");

    const params = useParams()



    


    const ApiData =()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res)=>{
     console.log(res.data)
            setproducts(res.data)
            
        })
    }
useEffect(() => {
ApiData()
 
}, [])



  return (
    <div container py>
            <Navbar_Component/>
           


<Grid container spacing={5} >
  <Grid item xs={6}>
    
  <div className="col-md-5 text-center">
     <img src={products.image} style={{height:500,alignItems:"center"}} alt="" />
        </div>
  </Grid>
  <Grid item xs={6}>
  <h5>{products.title}</h5>
          <p>Model Number : HY-908B</p>
          <Typography
              style={{ fontSize: 13, marginBottom: 10 }}
              color="text.secondary"
            >
              Rating: 3.9
              <FaStar sx={{ height: 16, color: "green" }} />
            </Typography>
        
          <div><p style={{color: "gray",}}>Category : {products.category}</p></div>
          <h5 style={{fontWeight: "bold"}}>$ : {products.price}</h5>
          <p>{}</p>
          <p  style={{ fontSize: 13, marginBottom: 10 }}>{products.desc}</p>
  </Grid>
  </Grid>






   
<Footer/>
    </div>

  )
}

export default ProductDetail
