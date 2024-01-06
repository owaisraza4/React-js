import React,{useState} from 'react'
import AllProducts from './AllProducts'
import Banner from './Banner'
import Banner2 from './Banner2'
import Bestsell from './Bestsell'

import CopyR from './CopyR'
import Detail from './Detail'
import Footer from './Footer'
import HeroSectiom from './HeroSectiom'
import Navbar from './Navbar'


const MainSection = () => {
    const [Data, setData] = useState(false);

    const Handle_change = () => {
           setData(true)
      };
  return (
    <div>
 {Data ? (<Detail/>) : (
    <div>
        <Navbar/>
        <HeroSectiom/>
        <Banner/>

        <div onClick={Handle_change}><Bestsell/></div>
        <Banner2/>
        <div onClick={Handle_change}><AllProducts/></div>
        <Footer />
        <CopyR/>
        </div>
        )}
    </div>
  )
}

export default MainSection
