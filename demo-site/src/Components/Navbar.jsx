import React from 'react'

import Logo from './Logo'
import NavLink from './NavLink'
import SearchNav from '../../SearchNav'

const Navbar = () => {
  return (
    <div className='Main-nav ' >
        <Logo/>
        <NavLink/>
        <SearchNav/>
    </div>
  )
}

export default Navbar