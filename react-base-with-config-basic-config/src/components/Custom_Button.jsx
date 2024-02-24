import React from 'react'

const Custom_Button = (props) => {
  return (
    <div>
      <button className='bg-sky-600 w-full py-3 text-white font-bold rounded-md' {...props}>
        {props.children}
      </button>
    </div>
  )
}

export { Custom_Button}
