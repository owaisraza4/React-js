import React from 'react'

const ShopButton = (props) => {
  return (
    <div>
        <button className='shop-btn'>{props.label}</button>
    </div>
  )
}

export default ShopButton