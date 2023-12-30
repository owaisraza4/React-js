import React from 'react'
import "../Css/header.css"

const Header = () => {
  return (
    <>
    <div className='header'>
      
      <div className='container'>
      <div>Logo</div>
        <button className='sign_btn'>Sign Up</button>
      </div>
    </div>
    <div className='Showcase'>
      <div className="showcase_content">
        <div>Generate more leads with a<br /> profesional landing page!...</div>
        <div className="serach_bar">
          <input type="search" placeholder='Email Address' name="" id="search" />
        <button className='searc_btn'>Submit</button>
         
        </div>
      </div>
 
    </div>
    </>
  )
}

export default Header

