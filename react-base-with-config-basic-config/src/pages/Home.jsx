
import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import { Navbar_Component } from '../components/Navbar_Component'
import Product from '../components/Product'
import Footer from './Footer'




const Home = () => {



    return (
        <div className=''>

            <Navbar_Component />

            <HeroSection/>
            <Product/>


          
                   <Footer/>
        </div>
    )
}

export { Home }
