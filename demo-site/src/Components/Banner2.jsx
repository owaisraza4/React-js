import React from 'react'
import Banner2Content from './Banner2Content'
import Banner2img from './Banner2img'


const Banner2 = () => {
  return (
    <div>
        <div className="container p-5">
            <div className="row p-5" id='BannerSection' >
                <div className="col-md-7">
                    <Banner2img/>
                </div>
                <div className="col-md-5">
              <Banner2Content/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2