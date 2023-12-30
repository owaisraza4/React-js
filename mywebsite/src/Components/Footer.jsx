import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

import "../Css/footer.css"
const Footer = () => {
  return (
    <div>
      <div className='footer-main'>
<div className="footer-showcase">
    <div className='f-content1'>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      <p className='copy-R'>&#169; Your Website 2023 All Rights Reserved.</p>
    </div>

    <div className="f-content2">
      <FacebookRoundedIcon color="primary" style={{margin : 10}}/>
      <TwitterIcon color="primary" style={{margin : 10}}/>
      <SubscriptionsRoundedIcon color="primary" style={{margin : 10}}/>
      <InstagramIcon color="primary" style={{margin : 10}}/>

    </div>
</div>
      </div>
    </div>
  )
}

export default Footer
