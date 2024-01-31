import { TextField } from '@mui/material'
import React from 'react'

const ImputComponent = (props) => {
    const {placeholder,id,type,required,onChange} =props
  return (
    <div>
          <TextField placeholder={placeholder} type={type} id={id} onChange={onChange} required={required}  sx={{ width: "100%",mt:2 }} variant="outlined"/>
    </div>
  )
}

export default ImputComponent