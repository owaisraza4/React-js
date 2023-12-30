import React from 'react'
import "../Css/detail.css"
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import TerminalIcon from '@mui/icons-material/Terminal';
const Detail = () => {
  return (
    <div>
      <div className='main'>
<div className='main_content'>
    <div className="col-md-1">
        <PersonalVideoIcon color="primary" sx={{ fontSize: 60 }}/>
        <h4>Fully Responsive</h4>
        <p className='detailP'> Lorem ipsum dolor sit,<br />
             amet consectetur adipisicing elit.</p>
    </div>
    <div className="col-md-1"> 
    <AutoAwesomeMotionIcon color="primary" sx={{ fontSize: 60 }}/>
        <h4>Bootstrap 5 Ready</h4>
        <p className='detailP'>Lorem ipsum dolor sit,<br />
             amet consectetur adipisicing elit.</p></div>
    <div className="col-md-1">
    <TerminalIcon color="primary" sx={{ fontSize: 60 }}/>
        <h4>Easy to learn</h4>
        <p className='detailP'>Lorem ipsum dolor sit,<br />
             amet consectetur adipisicing elit.</p>
    </div>

</div>
      </div>
    </div>
  )
}

export default Detail
