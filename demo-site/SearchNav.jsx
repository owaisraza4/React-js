import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchicon from './src/Components/Searchicon';


const SearchNav = () => {
  return (
    <div className='main-search'>
        <div>
            <ShoppingCartIcon sx={{ fontSize: 30 ,margin : 1}}/>
        </div>
        <div>2 items</div>
        <div>
         <Searchicon/>
        </div>

    </div>
  )
}

export default SearchNav