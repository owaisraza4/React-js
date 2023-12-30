import React from 'react'
import "../Css/team.css"
const Team = () => {
  return (
    <div>
      <div className='main_team'>
        <h3>What peoples are saying.....</h3>
        <div className="main_Box">
        <div className="main_box_1">
            <div className='team_img1'></div>
            <h5>Margerate E.</h5>
            <p className='detailP'>This is so Amazing!Thanx Guys.</p>
        </div>
        <div className="main_box_1">
        <div className='team_img2'></div>
            <h5>Freed S.</h5>
            <p className='detailP'>This is so Amazing!Thanx Guys.</p>
        </div>
        <div className="main_box_1">
        <div className='team_img3'></div>
            <h5>Sarah S.</h5>
            <p className='detailP'>This is so Amazing!Thanx Guys.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Team
