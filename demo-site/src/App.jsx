import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AllProducts from './Components/AllProducts';
import Banner from './Components/Banner';
import Banner2 from './Components/Banner2';
import Bestsell from './Components/Bestsell';

import CopyR from './Components/CopyR';
import Footer from './Components/Footer';
import HeroSectiom from './Components/HeroSectiom'
import Navbar from './Components/Navbar'


function App() {


  return (
    <> 
    <Navbar sticky="top"/>
    <HeroSectiom/>
    <Banner/>
    <Bestsell/>
    <Banner2/>
    <AllProducts/>
    <Footer/>
    <CopyR/>
   


    </>
  )
}

export default App
