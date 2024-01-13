import React from 'react'

const InputFeild = (props) => {
  return (
    <div>
        <input
        className='form-control my-3'
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChangeHandle(e.target.value, props.id);
        }}
      />
    </div>
  )
}

export default InputFeild
